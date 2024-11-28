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
import { GetAuthenticationTokenResponse } from '../models';
import { RefreshAuthenticationTokenResponse } from '../models';
/**
 * AuthApi - axios parameter creator
 * @export
 */
export const AuthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * ### Error Codes | Code | Name | Message | | :--- | :--- | :--- | | 23_999_101 | UnknownExceptionWhenTryingFetchApplicationApiKey |  | | 23_999_102 | FailedToFindApplicationApiKey |  | | 23_999_103 | UnknownExceptionWhenTryingToGetUserAuthenticationToken |  |
         * @summary 23_999
         * @param {string} [secretKey] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authAuthenticatePost: async (secretKey?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/authenticate`;
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

            if (secretKey !== undefined) {
                localVarQueryParameter['SecretKey'] = secretKey;
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
         * ### Error Codes | Code | Name | Message | | :--- | :--- | :--- | | 23_998_101 | UnknownExceptionWhenTryingToRefreshUserAuthenticationToken |  |
         * @summary 23_998
         * @param {string} [refreshToken] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authRefreshPost: async (refreshToken?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/refresh`;
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

            if (refreshToken !== undefined) {
                localVarQueryParameter['RefreshToken'] = refreshToken;
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
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function(configuration?: Configuration) {
    return {
        /**
         * ### Error Codes | Code | Name | Message | | :--- | :--- | :--- | | 23_999_101 | UnknownExceptionWhenTryingFetchApplicationApiKey |  | | 23_999_102 | FailedToFindApplicationApiKey |  | | 23_999_103 | UnknownExceptionWhenTryingToGetUserAuthenticationToken |  |
         * @summary 23_999
         * @param {string} [secretKey] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authAuthenticatePost(secretKey?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<GetAuthenticationTokenResponse>>> {
            const localVarAxiosArgs = await AuthApiAxiosParamCreator(configuration).authAuthenticatePost(secretKey, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * ### Error Codes | Code | Name | Message | | :--- | :--- | :--- | | 23_998_101 | UnknownExceptionWhenTryingToRefreshUserAuthenticationToken |  |
         * @summary 23_998
         * @param {string} [refreshToken] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authRefreshPost(refreshToken?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<RefreshAuthenticationTokenResponse>>> {
            const localVarAxiosArgs = await AuthApiAxiosParamCreator(configuration).authRefreshPost(refreshToken, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * ### Error Codes | Code | Name | Message | | :--- | :--- | :--- | | 23_999_101 | UnknownExceptionWhenTryingFetchApplicationApiKey |  | | 23_999_102 | FailedToFindApplicationApiKey |  | | 23_999_103 | UnknownExceptionWhenTryingToGetUserAuthenticationToken |  |
         * @summary 23_999
         * @param {string} [secretKey] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authAuthenticatePost(secretKey?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<GetAuthenticationTokenResponse>> {
            return AuthApiFp(configuration).authAuthenticatePost(secretKey, options).then((request) => request(axios, basePath));
        },
        /**
         * ### Error Codes | Code | Name | Message | | :--- | :--- | :--- | | 23_998_101 | UnknownExceptionWhenTryingToRefreshUserAuthenticationToken |  |
         * @summary 23_998
         * @param {string} [refreshToken] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authRefreshPost(refreshToken?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<RefreshAuthenticationTokenResponse>> {
            return AuthApiFp(configuration).authRefreshPost(refreshToken, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export class AuthApi extends BaseAPI {
    /**
     * ### Error Codes | Code | Name | Message | | :--- | :--- | :--- | | 23_999_101 | UnknownExceptionWhenTryingFetchApplicationApiKey |  | | 23_999_102 | FailedToFindApplicationApiKey |  | | 23_999_103 | UnknownExceptionWhenTryingToGetUserAuthenticationToken |  |
     * @summary 23_999
     * @param {string} [secretKey] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public async authAuthenticatePost(secretKey?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<GetAuthenticationTokenResponse>> {
        return AuthApiFp(this.configuration).authAuthenticatePost(secretKey, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * ### Error Codes | Code | Name | Message | | :--- | :--- | :--- | | 23_998_101 | UnknownExceptionWhenTryingToRefreshUserAuthenticationToken |  |
     * @summary 23_998
     * @param {string} [refreshToken] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public async authRefreshPost(refreshToken?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<RefreshAuthenticationTokenResponse>> {
        return AuthApiFp(this.configuration).authRefreshPost(refreshToken, options).then((request) => request(this.axios, this.basePath));
    }
}