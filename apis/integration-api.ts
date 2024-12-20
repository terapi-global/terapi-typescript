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
import { GetOneIntegrationResponse } from '../models';
import { IntegrationListResponse } from '../models';
/**
 * IntegrationApi - axios parameter creator
 * @export
 */
export const IntegrationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * ### Error Codes | Code | Name | Message | | :--- | :--- | :--- | | 17_997_101 | UnknownExceptionWhenTryingFetchOneIntegration |  |
         * @summary 17_997
         * @param {string} [id] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        integrationGetGet: async (id?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/integration/get`;
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
        /**
         * ### Error Codes | Code | Name | Message | | :--- | :--- | :--- | | 17_999_101 | UnknownExceptionWhenTryingFetchIntegrations | Unknown exception when trying to fetch integrations. |
         * @summary 17_999
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {string} [searchKeyword] 
         * @param {string} [categoryId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        integrationListGet: async (page?: number, perPage?: number, searchKeyword?: string, categoryId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/integration/list`;
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

            if (page !== undefined) {
                localVarQueryParameter['Page'] = page;
            }

            if (perPage !== undefined) {
                localVarQueryParameter['PerPage'] = perPage;
            }

            if (searchKeyword !== undefined) {
                localVarQueryParameter['SearchKeyword'] = searchKeyword;
            }

            if (categoryId !== undefined) {
                localVarQueryParameter['CategoryId'] = categoryId;
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
 * IntegrationApi - functional programming interface
 * @export
 */
export const IntegrationApiFp = function(configuration?: Configuration) {
    return {
        /**
         * ### Error Codes | Code | Name | Message | | :--- | :--- | :--- | | 17_997_101 | UnknownExceptionWhenTryingFetchOneIntegration |  |
         * @summary 17_997
         * @param {string} [id] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async integrationGetGet(id?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<GetOneIntegrationResponse>>> {
            const localVarAxiosArgs = await IntegrationApiAxiosParamCreator(configuration).integrationGetGet(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * ### Error Codes | Code | Name | Message | | :--- | :--- | :--- | | 17_999_101 | UnknownExceptionWhenTryingFetchIntegrations | Unknown exception when trying to fetch integrations. |
         * @summary 17_999
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {string} [searchKeyword] 
         * @param {string} [categoryId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async integrationListGet(page?: number, perPage?: number, searchKeyword?: string, categoryId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<IntegrationListResponse>>> {
            const localVarAxiosArgs = await IntegrationApiAxiosParamCreator(configuration).integrationListGet(page, perPage, searchKeyword, categoryId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * IntegrationApi - factory interface
 * @export
 */
export const IntegrationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * ### Error Codes | Code | Name | Message | | :--- | :--- | :--- | | 17_997_101 | UnknownExceptionWhenTryingFetchOneIntegration |  |
         * @summary 17_997
         * @param {string} [id] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async integrationGetGet(id?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<GetOneIntegrationResponse>> {
            return IntegrationApiFp(configuration).integrationGetGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * ### Error Codes | Code | Name | Message | | :--- | :--- | :--- | | 17_999_101 | UnknownExceptionWhenTryingFetchIntegrations | Unknown exception when trying to fetch integrations. |
         * @summary 17_999
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {string} [searchKeyword] 
         * @param {string} [categoryId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async integrationListGet(page?: number, perPage?: number, searchKeyword?: string, categoryId?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<IntegrationListResponse>> {
            return IntegrationApiFp(configuration).integrationListGet(page, perPage, searchKeyword, categoryId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * IntegrationApi - object-oriented interface
 * @export
 * @class IntegrationApi
 * @extends {BaseAPI}
 */
export class IntegrationApi extends BaseAPI {
    /**
     * ### Error Codes | Code | Name | Message | | :--- | :--- | :--- | | 17_997_101 | UnknownExceptionWhenTryingFetchOneIntegration |  |
     * @summary 17_997
     * @param {string} [id] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IntegrationApi
     */
    public async integrationGetGet(id?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<GetOneIntegrationResponse>> {
        return IntegrationApiFp(this.configuration).integrationGetGet(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * ### Error Codes | Code | Name | Message | | :--- | :--- | :--- | | 17_999_101 | UnknownExceptionWhenTryingFetchIntegrations | Unknown exception when trying to fetch integrations. |
     * @summary 17_999
     * @param {number} [page] 
     * @param {number} [perPage] 
     * @param {string} [searchKeyword] 
     * @param {string} [categoryId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IntegrationApi
     */
    public async integrationListGet(page?: number, perPage?: number, searchKeyword?: string, categoryId?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<IntegrationListResponse>> {
        return IntegrationApiFp(this.configuration).integrationListGet(page, perPage, searchKeyword, categoryId, options).then((request) => request(this.axios, this.basePath));
    }
}
