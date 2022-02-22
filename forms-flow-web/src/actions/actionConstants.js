 /* istanbul ignore file */
const ACTION_CONSTANTS = {
  SET_CURRENT_PAGE: "SET_CURRENT_PAGE",
  SET_USER_AUTHENTICATION: "SET_USER_AUTHENTICATION",
  SET_USER_TOKEN: "SET_USER_TOKEN",
  SET_USER_ROLES: "SET_USER_ROLES",
  SET_USER_DETAILS: "SET_USER_DETAILS",
  ERROR: "ERROR",
  IS_LOADING: "IS_LOADING",
  //FORM
  FORM_DELETE: "FORM_DELETE",
  FORM_SUBMISSION_DELETE: "FORM_SUBMISSION_DELETE",
  FORM_SUBMISSION_ERROR: "FORM_SUBMISSION_ERROR",
  IS_FORM_SUBMISSION_LOADING: "IS_FORM_SUBMISSION_LOADING",
  IS_FORM_WORKFLOW_SAVED: "IS_FORM_WORKFLOW_SAVED",
  //TASKS
  LIST_TASKS: "LIST_TASKS",
  TASKS_COUNT: "TASKS_COUNT",
  TASK_DETAIL: "TASK_DETAIL",
  IS_TASK_UPDATING: "IS_TASK_UPDATING",
  LIST_DASHBOARDS: "LIST_DASHBOARDS",
  DASHBOARD_DETAIL: "DASHBOARD_DETAIL",
  IS_DASHBOARD_LOADING: "IS_DASHBOARD_LOADING",
  IS_INSIGHT_DETAIL_LOADING: "IS_INSIGHT_DETAIL_LOADING",
  // Metrics
  METRICSSUBMISSIONS: "METRICSSUBMISSIONS",
  IS_METRICS_LOADING: "ISMETRICSLOADING",
  METRICS_SUBMISSIONS_STATUS: "METRICS_SUBMISSIONS_STATUS",
  IS_METRICS_STATUS_LOADING: "IS_METRICS_STATUS_LOADING",
  SELECTED_METRICS_ID: "SELECTED_METRICS_ID",
  METRICS_LOAD_ERROR: "METRICS_LOAD_ERROR",
  METRICS_STATUS_LOAD_ERROR: "METRICS_STATUS_LOAD_ERROR",
  IS_PROCESS_STATUS_LOADING: "IS_PROCESS_STATUS_LOADING",
  PROCESS_STATUS_LIST: "PROCESS_STATUS_LIST",
  IS_PROCESS_STATUS_LOAD_ERROR: "IS_PROCESS_STATUS_LOAD_ERROR",
  IS_PROCESS_ACTIVITY_LOAD_ERROR: "IS_PROCESS_ACTIVITY_LOAD_ERROR",
  // Application history
  LIST_APPLICATION_HISTORY: "LIST_APPLICATION_HISTORY",
  APPLICATION_HISTORY_DETAIL: "APPLICATION_HISTORY_DETAIL",
  PROCESS_LIST: "PROCESS_LIST",
  IS_HISTORY_LOADING: "IS_HISTORY_LOADING",
  IS_FORM_PROCESS_STATUS_LOAD_ERROR: "IS_FORM_PROCESS_STATUS_LOAD_ERROR",
  FORM_PROCESS_LIST: "FORM_PROCESS_LIST",
  //Application
  LIST_APPLICATIONS: "LIST_APPLICATIONS",
  LIST_APPLICATIONS_OF_FORM: "LIST_APPLICATIONS_OF_FORM",
  APPLICATION_DETAIL: "APPLICATION_DETAIL",
  APPLICATION_DETAIL_STATUS_CODE: "APPLICATION_DETAIL_STATUS_CODE",
  IS_APPLICATION_LIST_LOADING: "IS_APPLICATION_LIST_LOADING",
  IS_APPLICATION_DETAIL_LOADING: "IS_APPLICATION_DETAIL_LOADING",
  IS_APPLICATION_UPDATING: "IS_APPLICATION_UPDATING",
  APPLICATION_PROCESS: "APPLICATION_PROCESS",
  SET_APPLICATION_LIST_COUNT: "SET_APPLICATION_LIST_COUNT",
  PROCESS_ACTIVITIES: "PROCESS_ACTIVITIES",
  PROCESS_DIAGRAM_XML: "PROCESS_DIAGRAM_XML",
  IS_PROCESS_DIAGRAM_LOADING: "IS_PROCESS_DIAGRAM_LOADING",
  APPLICATION_LIST_ACTIVE_PAGE: "APPLICATION_LIST_ACTIVE_PAGE",
  APPLICATION_STATUS_LIST: "APPLICATION_STATUS_LIST",
  APPLICATIONS_ERROR: "APPLICATIONS_ERROR",
  //Menu
  TOGGLE_MENU: "TOGGLE_MENU",
  //BPM TASKS
  BPM_LIST_TASKS: "BPM_LIST_TASKS",
  BPM_PROCESS_LIST: "BPM_PROCESS_LIST",
  BPM_USER_LIST: "BPM_USER_LIST",
  BPM_TASKS_COUNT: "BPM_TASKS_COUNT",
  BPM_TASK_DETAIL: "BPM_TASK_DETAIL",
  IS_BPM_TASK_UPDATING: "IS_BPM_TASK_UPDATING",
  IS_BPM_TASK_LOADING: "IS_BPM_TASK_LOADING",
  IS_BPM_TASK_DETAIL_LOADING: "IS_BPM_TASK_DETAIL_LOADING",
  IS_BPM_TASK_DETAIL_UPDATING: "IS_BPM_TASK_DETAIL_UPDATING",
  BPM_FITER_LIST: "BPM_FITER_LIST",
  IS_BPM_FILTERS_LOADING: "IS_BPM_FILTERS_LOADING",
  BPM_SELECTED_FILTER: "BPM_SELECTED_FILTER",
  SELECTED_TASK_ID: "SELECTED_TASK_ID",
  SET_TASK_GROUP: "SET_TASK_GROUP",
  IS_TASK_GROUP_LOADING: "IS_TASK_GROUP_LOADING",
  UPDATE_FILTER_LIST_SORT_PARAMS: "UPDATE_FILTER_LIST_SORT_PARAMS",
  UPDATE_FILTER_LIST_SEARCH_PARAMS: "UPDATE_FILTER_LIST_SEARCH_PARAMS",
  UPDATE_LIST_PARAMS: "UPDATE_LIST_PARAMS",
  UPDATE_SEARCH_QUERY_TYPE: "UPDATE_SEARCH_QUERY_TYPE",
  UPDATE_VARIABLE_NAME_IGNORE_CASE: "UPDATE_VARIABLE_NAME_IGNORE_CASE",
  UPDATE_VARIABLE_VALUE_IGNORE_CASE: "UPDATE_VARIABLE_VALUE_IGNORE_CASE",
  RELOAD_TASK_FORM_SUBMISSION: "RELOAD_TASK_FORM_SUBMISSION",
  BPM_TASK_LIST_ACTIVE_PAGE: "BPM_TASK_LIST_ACTIVE_PAGE",
  //BPM FORMS
  BPM_FORM_LIST: "BPM_FORM_LIST",
  IS_BPM_FORM_LIST_LOADING: "IS_BPM_FORM_LIST_LOADING",
  BPM_FORM_LIST_PAGE_CHANGE: "BPM_FORM_LIST_PAGE_CHANGE",
  BPM_FORM_LIST_LIMIT_CHANGE: "BPM_FORM_LIST_LIMIT_CHANGE",
  BPM_FORM_LIST_SORT_CHANGE: "BPM_FORM_LIST_SORT_CHANGE",
  BPM_MAINTAIN_PAGINATION: "BPM_MAINTAIN_PAGINATION",
  //CheckList Form
  FORM_CHECK_LIST_UPDATE: "FORM_CHECK_LIST_UPDATE",
  FORM_UPLOAD_LIST: "FORM_UPLOAD_LIST",
  FORM_UPLOAD_COUNTER: "FORM_UPLOAD_COUNTER",
  CHANGE_SIZE_PER_PAGE: "CHANGE_SIZE_PER_PAGE",

  // Dashboards

  DASHBOARDS_LIST: "DASHBOARDS_LIST",
  DASHBOARDS_LIST_ERROR: "DASHBOARDS_LIST_ERROR",
  DASHBOARDS_LIST_GROUPS: "DASHBOARDS_LIST_GROUPS",
  DASHBOARDS_MAP_FROM_GROUPS: "DASHBOARDS_MAP_FROM_GROUPS",
  DASHBOARDS_CLEAN_UP: "DASHBOARDS_CLEAN_UP",
  DASHBOARDS_INITIATE_UPDATE: "DASHBOARDS_INITIATE_UPDATE",
  DASHBOARDS_UPDATE_ERROR: "DASHBOARDS_UPDATE_ERROR",
  DASHBOARDS_HIDE_UPDATE_ERROR: "DASHBOARDS_HIDE_UPDATE_ERROR",

  // Employee Data
  EMPLOYEE_DATA: "EMPLOYEE_DATA",
  EMPLOYEE_DATA_ERROR: "EMPLOYEE_DATA_ERROR",
};

export default ACTION_CONSTANTS;