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

import { UserProfileStatisticsDto } from './user-profile-statistics-dto';
import { UserProfileStatisticsError } from './user-profile-statistics-error';
 /**
 * 
 *
 * @export
 * @interface UserProfileStatisticsResponse
 */
export interface UserProfileStatisticsResponse {

    /**
     * @type {boolean}
     * @memberof UserProfileStatisticsResponse
     */
    success?: boolean;

    /**
     * @type {UserProfileStatisticsDto}
     * @memberof UserProfileStatisticsResponse
     */
    data?: UserProfileStatisticsDto | null;

    /**
     * @type {UserProfileStatisticsError}
     * @memberof UserProfileStatisticsResponse
     */
    error?: UserProfileStatisticsError | null;
}
