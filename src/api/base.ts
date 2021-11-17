import axios, { AxiosInstance } from 'axios';
import axiosFormData from 'axios-form-data';
import extol from 'extol';
import { yallAxiosConnect } from 'yall2';

export default abstract class CanvasApiBase {
  /**
   * Base Canvas API URL
   * Defaul: instructure canvas API URL
   * Override by CANVAS_API_BASE env var/.env entry
   */
  @extol('https://canvas.instructure.com/api/v1')
  canvasApiBase: string;

  /**
   * API token used in authorization to Canvas API
   * No default, should be set.
   * Override by CANVAS_API_TOKEN env var/.env entry
   */
  @extol('')
  canvasApiToken: string;

  /**
   * Set flag to log all requests sent by axios.
   * Can be set to boolean string, LOG_CANVAS_REQUESTS=false
   * Defaults to true.
   */
  @extol(true)
  logCanvasRequests: boolean;

  /**
   * Axios fetcher instance
   */
  protected axios: AxiosInstance;
  protected baseSuffix: string;

  constructor(baseSuffix = '') {
    this.baseSuffix = baseSuffix;
    this.axios = axios.create({
      baseURL: `${this.canvasApiBase}${baseSuffix}`,
      headers: {
        Authorization: `Bearer ${this.canvasApiToken}`,
      },
    });

    this.axios.interceptors.request.use(axiosFormData);
    if (this.logCanvasRequests) {
      yallAxiosConnect(this.axios);
    }
  }
}
