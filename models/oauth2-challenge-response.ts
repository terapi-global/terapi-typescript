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

import { OAuth2ChallengeDto } from './oauth2-challenge-dto';
import { OAuth2ChallengeError } from './oauth2-challenge-error';
 /**
 * 
 *
 * @export
 * @interface OAuth2ChallengeResponse
 */
export interface OAuth2ChallengeResponse {

    /**
     * @type {boolean}
     * @memberof OAuth2ChallengeResponse
     */
    success?: boolean;

    /**
     * @type {OAuth2ChallengeDto}
     * @memberof OAuth2ChallengeResponse
     */
    data?: OAuth2ChallengeDto | null;

    /**
     * @type {OAuth2ChallengeError}
     * @memberof OAuth2ChallengeResponse
     */
    error?: OAuth2ChallengeError | null;
}
