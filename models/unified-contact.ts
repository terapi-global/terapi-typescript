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
 * @interface UnifiedContact
 */
export interface UnifiedContact {

    /**
     * @type {string}
     * @memberof UnifiedContact
     */
    externalId: string | null;

    /**
     * @type {string}
     * @memberof UnifiedContact
     */
    companyName: string | null;

    /**
     * @type {string}
     * @memberof UnifiedContact
     */
    companyId: string | null;

    /**
     * @type {string}
     * @memberof UnifiedContact
     */
    platformSource: string | null;

    /**
     * @type {string}
     * @memberof UnifiedContact
     */
    firstName: string | null;

    /**
     * @type {string}
     * @memberof UnifiedContact
     */
    lastName: string | null;

    /**
     * @type {Array<string>}
     * @memberof UnifiedContact
     */
    phoneNumbers: Array<string> | null;

    /**
     * @type {string}
     * @memberof UnifiedContact
     */
    email: string | null;

    /**
     * @type {string}
     * @memberof UnifiedContact
     */
    profileUrl: string | null;
}