<?php

namespace App\Http\Middleware;

use Closure;

class CorsMiddleware
{
    public function handle($request, Closure $next)
    {
        // Allow requests from any origin.
        header('Access-Control-Allow-Origin: *');
        
        // Allow the following HTTP methods.
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
        
        // Allow the following request headers.
        header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
        
        // Allow cookies to be sent.
        header('Access-Control-Allow-Credentials: true');

        return $next($request);
    }
}