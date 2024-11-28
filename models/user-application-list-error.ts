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
import { UserApplicationListRequestErrorCodes } from './user-application-list-request-error-codes';
 /**
 * 
 *
 * @export
 * @interface UserApplicationListError
 */
export interface UserApplicationListError {

    /**
     * @type {UserApplicationListRequestErrorCodes}
     * @memberof UserApplicationListError
     */
    code?: UserApplicationListRequestErrorCodes;

    /**
     *   1 = BusinessLogic  2 = InternalServerError
     *
     * @type {ClientErrorType}
     * @memberof UserApplicationListError
     */
    type?: ClientErrorType;

    /**
     * @type {{ [key: string]: string; }}
     * @memberof UserApplicationListError
     */
    values?: { [key: string]: string; } | null;
}