/* tslint:disable */
/* eslint-disable */
/**
 * Terapi.Web.Api-v1
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { ApplicationApiKeyByApplicationIdResponse } from '../models';
import { ApplicationapikeyGenerateBody } from '../models';
import { ApplicationapikeyGenerateBody1 } from '../models';
import { ApplicationapikeyGenerateBody2 } from '../models';
import { CreateApplicationApiKeyResponse } from '../models';
import { RevokeApplicationApiKeyResponse } from '../models';
/**
 * ApplicationApiKeyApi - axios parameter creator
 * @export
 */
export const ApplicationApiKeyApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * ### Error Codes | Code | Name | Message | | :--- | :--- | :--- | | 16_999_101 | ApplicationNotFound | Application not found. | | 16_999_102 | UnknownExceptionWhenCheckApplicationExistence | Unknown exception when checking if application exists. | | 16_999_103 | UnknownExceptionWhenGenerateApplicationApiKey | Unknown exception when generating application API key. |
         * @summary 16_999
         * @param {ApplicationapikeyGenerateBody} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        applicationApikeyGeneratePost: async (body?: ApplicationapikeyGenerateBody, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/application-apikey/generate`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * ### Error Codes | Code | Name | Message | | :--- | :--- | :--- | | 16_995_101 | ApplicationApiKeyNotFound | Application API key not found. | | 16_995_102 | UnknownExceptionWhenTryingFetchApplications | Unknown exception when trying to fetch applications. |
         * @summary 16_995
         * @param {string} [applicationId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        applicationApikeyGetByApplicationIdGet: async (applicationId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/application-apikey/get-by-application-id`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            if (applicationId !== undefined) {
                localVarQueryParameter['ApplicationId'] = applicationId;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * ### Error Codes | Code | Name | Message | | :--- | :--- | :--- | | 16_998_101 | ApplicationApiKeyNotFound | Application API key not found. | | 16_998_102 | UnknownExceptionWhenCheckApplicationExistence | Unknown exception when checking if application exists. | | 16_998_103 | UnknownExceptionWhenGenerateApplicationApiKey | Unknown exception when generating application API key. |
         * @summary 16_998
         * @param {string} [id] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        applicationApikeyRevokeDelete: async (id?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/application-apikey/revoke`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            if (id !== undefined) {
                localVarQueryParameter['Id'] = id;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ApplicationApiKeyApi - functional programming interface
 * @export
 */
export const ApplicationApiKeyApiFp = function(configuration?: Configuration) {
    return {
        /**
         * ### Error Codes | Code | Name | Message | | :--- | :--- | :--- | | 16_999_101 | ApplicationNotFound | Application not found. | | 16_999_102 | UnknownExceptionWhenCheckApplicationExistence | Unknown exception when checking if application exists. | | 16_999_103 | UnknownExceptionWhenGenerateApplicationApiKey | Unknown exception when generating application API key. |
         * @summary 16_999
         * @param {ApplicationapikeyGenerateBody} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async applicationApikeyGeneratePost(body?: ApplicationapikeyGenerateBody, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<CreateApplicationApiKeyResponse>>> {
            const localVarAxiosArgs = await ApplicationApiKeyApiAxiosParamCreator(configuration).applicationApikeyGeneratePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * ### Error Codes | Code | Name | Message | | :--- | :--- | :--- | | 16_995_101 | ApplicationApiKeyNotFound | Application API key not found. | | 16_995_102 | UnknownExceptionWhenTryingFetchApplications | Unknown exception when trying to fetch applications. |
         * @summary 16_995
         * @param {string} [applicationId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async applicationApikeyGetByApplicationIdGet(applicationId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ApplicationApiKeyByApplicationIdResponse>>> {
            const localVarAxiosArgs = await ApplicationApiKeyApiAxiosParamCreator(configuration).applicationApikeyGetByApplicationIdGet(applicationId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * ### Error Codes | Code | Name | Message | | :--- | :--- | :--- | | 16_998_101 | ApplicationApiKeyNotFound | Application API key not found. | | 16_998_102 | UnknownExceptionWhenCheckApplicationExistence | Unknown exception when checking if application exists. | | 16_998_103 | UnknownExceptionWhenGenerateApplicationApiKey | Unknown exception when generating application API key. |
         * @summary 16_998
         * @param {string} [id] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async applicationApikeyRevokeDelete(id?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<RevokeApplicationApiKeyResponse>>> {
            const localVarAxiosArgs = await ApplicationApiKeyApiAxiosParamCreator(configuration).applicationApikeyRevokeDelete(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ApplicationApiKeyApi - factory interface
 * @export
 */
export const ApplicationApiKeyApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * ### Error Codes | Code | Name | Message | | :--- | :--- | :--- | | 16_999_101 | ApplicationNotFound | Application not found. | | 16_999_102 | UnknownExceptionWhenCheckApplicationExistence | Unknown exception when checking if application exists. | | 16_999_103 | UnknownExceptionWhenGenerateApplicationApiKey | Unknown exception when generating application API key. |
         * @summary 16_999
         * @param {ApplicationapikeyGenerateBody} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async applicationApikeyGeneratePost(body?: ApplicationapikeyGenerateBody, options?: AxiosRequestConfig): Promise<AxiosResponse<CreateApplicationApiKeyResponse>> {
            return ApplicationApiKeyApiFp(configuration).applicationApikeyGeneratePost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * ### Error Codes | Code | Name | Message | | :--- | :--- | :--- | | 16_995_101 | ApplicationApiKeyNotFound | Application API key not found. | | 16_995_102 | UnknownExceptionWhenTryingFetchApplications | Unknown exception when trying to fetch applications. |
         * @summary 16_995
         * @param {string} [applicationId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async applicationApikeyGetByApplicationIdGet(applicationId?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<ApplicationApiKeyByApplicationIdResponse>> {
            return ApplicationApiKeyApiFp(configuration).applicationApikeyGetByApplicationIdGet(applicationId, options).then((request) => request(axios, basePath));
        },
        /**
         * ### Error Codes | Code | Name | Message | | :--- | :--- | :--- | | 16_998_101 | ApplicationApiKeyNotFound | Application API key not found. | | 16_998_102 | UnknownExceptionWhenCheckApplicationExistence | Unknown exception when checking if application exists. | | 16_998_103 | UnknownExceptionWhenGenerateApplicationApiKey | Unknown exception when generating application API key. |
         * @summary 16_998
         * @param {string} [id] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async applicationApikeyRevokeDelete(id?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<RevokeApplicationApiKeyResponse>> {
            return ApplicationApiKeyApiFp(configuration).applicationApikeyRevokeDelete(id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ApplicationApiKeyApi - object-oriented interface
 * @export
 * @class ApplicationApiKeyApi
 * @extends {BaseAPI}
 */
export class ApplicationApiKeyApi extends BaseAPI {
    /**
     * ### Error Codes | Code | Name | Message | | :--- | :--- | :--- | | 16_999_101 | ApplicationNotFound | Application not found. | | 16_999_102 | UnknownExceptionWhenCheckApplicationExistence | Unknown exception when checking if application exists. | | 16_999_103 | UnknownExceptionWhenGenerateApplicationApiKey | Unknown exception when generating application API key. |
     * @summary 16_999
     * @param {ApplicationapikeyGenerateBody} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApplicationApiKeyApi
     */
    public async applicationApikeyGeneratePost(body?: ApplicationapikeyGenerateBody, options?: AxiosRequestConfig) : Promise<AxiosResponse<CreateApplicationApiKeyResponse>> {
        return ApplicationApiKeyApiFp(this.configuration).applicationApikeyGeneratePost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * ### Error Codes | Code | Name | Message | | :--- | :--- | :--- | | 16_995_101 | ApplicationApiKeyNotFound | Application API key not found. | | 16_995_102 | UnknownExceptionWhenTryingFetchApplications | Unknown exception when trying to fetch applications. |
     * @summary 16_995
     * @param {string} [applicationId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApplicationApiKeyApi
     */
    public async applicationApikeyGetByApplicationIdGet(applicationId?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<ApplicationApiKeyByApplicationIdResponse>> {
        return ApplicationApiKeyApiFp(this.configuration).applicationApikeyGetByApplicationIdGet(applicationId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * ### Error Codes | Code | Name | Message | | :--- | :--- | :--- | | 16_998_101 | ApplicationApiKeyNotFound | Application API key not found. | | 16_998_102 | UnknownExceptionWhenCheckApplicationExistence | Unknown exception when checking if application exists. | | 16_998_103 | UnknownExceptionWhenGenerateApplicationApiKey | Unknown exception when generating application API key. |
     * @summary 16_998
     * @param {string} [id] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApplicationApiKeyApi
     */
    public async applicationApikeyRevokeDelete(id?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<RevokeApplicationApiKeyResponse>> {
        return ApplicationApiKeyApiFp(this.configuration).applicationApikeyRevokeDelete(id, options).then((request) => request(this.axios, this.basePath));
    }
}
