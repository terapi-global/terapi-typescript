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

import { IntegrationListDto } from './integration-list-dto';
import { IntegrationListError } from './integration-list-error';
 /**
 * 
 *
 * @export
 * @interface IntegrationListResponse
 */
export interface IntegrationListResponse {

    /**
     * @type {boolean}
     * @memberof IntegrationListResponse
     */
    success?: boolean;

    /**
     * @type {IntegrationListDto}
     * @memberof IntegrationListResponse
     */
    data?: IntegrationListDto | null;

    /**
     * @type {IntegrationListError}
     * @memberof IntegrationListResponse
     */
    error?: IntegrationListError | null;
}
