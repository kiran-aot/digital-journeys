package org.camunda.bpm.extension.commons.connector;


import com.fasterxml.jackson.core.JsonProcessingException;
import org.apache.commons.lang3.StringUtils;
import com.fasterxml.jackson.databind.ObjectMapper;

import reactor.core.publisher.Mono;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.Properties;
import java.util.logging.Logger;

/**
 * This class prepares the payload and invokes the respective access handler based on the service ID.
 *
 * @author  sumathi.thirumani@aot-technologies.com
 */
@Component("httpServiceInvoker")
public class HTTPServiceInvoker {

    private final Logger LOGGER = Logger.getLogger(HTTPServiceInvoker.class.getName());

    @Autowired
    private AccessHandlerFactory accessHandlerFactory;

    @Autowired
    private Properties integrationCredentialProperties;

    @Value("${formsflow.ai.ods.url}")
    private String odsUrl;
    @Value("${formsflow.ai.fileService.url}")
    private String fileServiceUrl;

    public ResponseEntity<String> execute(String url, HttpMethod method, Object payload) throws IOException {
        String dataJson = payload != null ? new ObjectMapper().writeValueAsString(payload) : null;
        return execute(url, method, dataJson);

    }

    public ResponseEntity<String> execute(String url, HttpMethod method, String payload) {
        System.out.println("execute: " + payload);
        return accessHandlerFactory.getService(getServiceId(url)).exchange(url, method, payload);
    }

    public Mono<byte[]> exchangeForFile(String url, HttpMethod method, String payload) {
        return accessHandlerFactory.getService(getServiceId(url)).exchangeForFile(url, method, payload);
    }

    private String getServiceId(String url) {
        System.out.println("url: " + url);
        System.out.println("api.url: " + getProperties().getProperty("api.url"));
        if(StringUtils.contains(url, getProperties().getProperty("api.url"))) {
            System.out.println("returning applicationAccessHandler");
            return "applicationAccessHandler";
        } else if (StringUtils.contains(url, odsUrl)) {
            return "ODSAccessHandler";
        } else if (StringUtils.contains(url, fileServiceUrl)) {
            return "fileAccessHandler";
        } else {
            return "formAccessHandler";
        }
    }

    public Properties getProperties() {
        return integrationCredentialProperties;
    }

}