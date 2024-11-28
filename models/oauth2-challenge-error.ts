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
import { OAuth2ChallengeErrorCodes } from './oauth2-challenge-error-codes';
 /**
 * 
 *
 * @export
 * @interface OAuth2ChallengeError
 */
export interface OAuth2ChallengeError {

    /**
     * @type {OAuth2ChallengeErrorCodes}
     * @memberof OAuth2ChallengeError
     */
    code?: OAuth2ChallengeErrorCodes;

    /**
     *   1 = BusinessLogic  2 = InternalServerError
     *
     * @type {ClientErrorType}
     * @memberof OAuth2ChallengeError
     */
    type?: ClientErrorType;

    /**
     * @type {{ [key: string]: string; }}
     * @memberof OAuth2ChallengeError
     */
    values?: { [key: string]: string; } | null;
}