import apiClient from '../apiClient';
import { BaseResponse, RegisteredResponse, RegisterRequest } from './type';

export const registerUser = async (registerRequest: RegisterRequest): Promise<BaseResponse<RegisteredResponse>> => {
    try {
        const response = await apiClient.post<BaseResponse<RegisteredResponse>>(
            '/Authentication/register',
            registerRequest
        );
        return response.data;
    } catch (error: unknown) {

        console.log(error);
        console.log(typeof error);


        if (error instanceof Error) {
            throw new Error(error.message || 'An unexpected error occurred');
        } else {
            throw new Error('An unexpected error occurred');
        }
    }
};
