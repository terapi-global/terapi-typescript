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

import { ApplicationDto } from './application-dto';
import { IntegrationDto } from './integration-dto';
 /**
 * 
 *
 * @export
 * @interface ApplicationIntegrationDto
 */
export interface ApplicationIntegrationDto {

    /**
     * @type {string}
     * @memberof ApplicationIntegrationDto
     */
    id?: string;

    /**
     * @type {ApplicationDto}
     * @memberof ApplicationIntegrationDto
     */
    application?: ApplicationDto | null;

    /**
     * @type {IntegrationDto}
     * @memberof ApplicationIntegrationDto
     */
    integration?: IntegrationDto | null;
}