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

 /**
 * 
 *
 * @export
 * @interface OAuth2ChallengeTokenDto
 */
export interface OAuth2ChallengeTokenDto {

    /**
     * @type {string}
     * @memberof OAuth2ChallengeTokenDto
     */
    accessToken?: string | null;

    /**
     * @type {string}
     * @memberof OAuth2ChallengeTokenDto
     */
    refreshToken?: string | null;

    /**
     * @type {number}
     * @memberof OAuth2ChallengeTokenDto
     */
    expiresIn?: number;
}
