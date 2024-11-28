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

import { CategoryListRequestErrorCodes } from './category-list-request-error-codes';
import { ClientErrorType } from './client-error-type';
 /**
 * 
 *
 * @export
 * @interface CategoryListError
 */
export interface CategoryListError {

    /**
     * @type {CategoryListRequestErrorCodes}
     * @memberof CategoryListError
     */
    code?: CategoryListRequestErrorCodes;

    /**
     *   1 = BusinessLogic  2 = InternalServerError
     *
     * @type {ClientErrorType}
     * @memberof CategoryListError
     */
    type?: ClientErrorType;

    /**
     * @type {{ [key: string]: string; }}
     * @memberof CategoryListError
     */
    values?: { [key: string]: string; } | null;
}
