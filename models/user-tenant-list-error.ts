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

import { ClientErrorType } from './client-error-type';
import { UserTenantListRequestErrorCodes } from './user-tenant-list-request-error-codes';
 /**
 * 
 *
 * @export
 * @interface UserTenantListError
 */
export interface UserTenantListError {

    /**
     * @type {UserTenantListRequestErrorCodes}
     * @memberof UserTenantListError
     */
    code?: UserTenantListRequestErrorCodes;

    /**
     *   1 = BusinessLogic  2 = InternalServerError
     *
     * @type {ClientErrorType}
     * @memberof UserTenantListError
     */
    type?: ClientErrorType;

    /**
     * @type {{ [key: string]: string; }}
     * @memberof UserTenantListError
     */
    values?: { [key: string]: string; } | null;
}
