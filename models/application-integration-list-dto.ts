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

import { ApplicationIntegrationDto } from './application-integration-dto';
 /**
 * 
 *
 * @export
 * @interface ApplicationIntegrationListDto
 */
export interface ApplicationIntegrationListDto {

    /**
     * @type {number}
     * @memberof ApplicationIntegrationListDto
     */
    totalRecords: number;

    /**
     * @type {number}
     * @memberof ApplicationIntegrationListDto
     */
    currentPage: number | null;

    /**
     * @type {number}
     * @memberof ApplicationIntegrationListDto
     */
    perPage: number | null;

    /**
     * @type {Array<ApplicationIntegrationDto>}
     * @memberof ApplicationIntegrationListDto
     */
    items: Array<ApplicationIntegrationDto> | null;
}