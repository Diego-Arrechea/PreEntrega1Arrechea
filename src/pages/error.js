import React from 'react';

const ErrorPage = ({ errorCode, errorMessage }) => {
    return (
        <div className="container mx-auto mt-4 text-center">
            <h1 className="text-4xl font-semibold">Error {errorCode}</h1>
            <p className="text-lg text-gray-600 mt-4">{errorMessage}</p>
            <p className="text-lg text-gray-600 mt-4">
                Lo sentimos, ocurrió un error en la aplicación.
            </p>
        </div>
    );
};

export default ErrorPage;
