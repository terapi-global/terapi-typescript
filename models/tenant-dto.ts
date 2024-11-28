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
import { InvitationStatus } from './invitation-status';
 /**
 * 
 *
 * @export
 * @interface TenantDto
 */
export interface TenantDto {

    /**
     * @type {string}
     * @memberof TenantDto
     */
    providedName?: string | null;

    /**
     * @type {string}
     * @memberof TenantDto
     */
    invitedEmailAddress?: string | null;

    /**
     *   0 = Invited  1 = Accepted  2 = Declined
     *
     * @type {InvitationStatus}
     * @memberof TenantDto
     */
    invitationStatus?: InvitationStatus;

    /**
     * @type {ApplicationIntegrationDto}
     * @memberof TenantDto
     */
    applicationIntegration?: ApplicationIntegrationDto | null;

    /**
     * @type {string}
     * @memberof TenantDto
     */
    clientSecret?: string | null;

    /**
     * @type {string}
     * @memberof TenantDto
     */
    clientId?: string | null;

    /**
     * @type {string}
     * @memberof TenantDto
     */
    webhookUrl?: string | null;

    /**
     * @type {string}
     * @memberof TenantDto
     */
    authorizedOriginUrl?: string | null;

    /**
     * @type {string}
     * @memberof TenantDto
     */
    id?: string;
}
