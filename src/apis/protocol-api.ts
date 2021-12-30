/* tslint:disable */
/* eslint-disable */
/**
 * DeBank OpenAPI
 * Build for DeFi Developers.
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { Protocol } from '../models';
/**
 * ProtocolApi - axios parameter creator
 * @export
 */
export const ProtocolApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProtocolListR: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/protocol/list`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id protocol id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProtocolR: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getProtocolR.');
            }
            const localVarPath = `/v1/protocol`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id protocol id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTvl: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getTvl.');
            }
            const localVarPath = `/v1/protocol/tvl`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ProtocolApi - functional programming interface
 * @export
 */
export const ProtocolApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProtocolListR(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Protocol>>> {
            const localVarAxiosArgs = await ProtocolApiAxiosParamCreator(configuration).getProtocolListR(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} id protocol id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProtocolR(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Protocol>> {
            const localVarAxiosArgs = await ProtocolApiAxiosParamCreator(configuration).getProtocolR(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} id protocol id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTvl(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await ProtocolApiAxiosParamCreator(configuration).getTvl(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ProtocolApi - factory interface
 * @export
 */
export const ProtocolApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProtocolListR(options?: any): AxiosPromise<Array<Protocol>> {
            return ProtocolApiFp(configuration).getProtocolListR(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id protocol id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProtocolR(id: string, options?: any): AxiosPromise<Protocol> {
            return ProtocolApiFp(configuration).getProtocolR(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id protocol id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTvl(id: string, options?: any): AxiosPromise<void> {
            return ProtocolApiFp(configuration).getTvl(id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ProtocolApi - object-oriented interface
 * @export
 * @class ProtocolApi
 * @extends {BaseAPI}
 */
export class ProtocolApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProtocolApi
     */
    public getProtocolListR(options?: any) {
        return ProtocolApiFp(this.configuration).getProtocolListR(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} id protocol id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProtocolApi
     */
    public getProtocolR(id: string, options?: any) {
        return ProtocolApiFp(this.configuration).getProtocolR(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} id protocol id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProtocolApi
     */
    public getTvl(id: string, options?: any) {
        return ProtocolApiFp(this.configuration).getTvl(id, options).then((request) => request(this.axios, this.basePath));
    }
}
