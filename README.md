# NFTer

 Task required for the Laravel + React developer position

## Teck Stack
-   Laravel
-   Inertia.js
-   React
-   TypeScript
-   Tailwind CSS
-   Ethers
-   Tippyjs
-   Pusher/Socket.io

## Requirements
-   Instructions : https://hackmd.io/lhbPb37xStiziAMM7tjUNA#Laravel--React-Developer-Assignment
-   Figma Design : https://www.figma.com/file/AG7SctONBsjOXNJUn8ORss/Test-Assignment?node-id=0-1&t=teOCP2RMG6OYToel-0

## Prerequisits

For this project to run, you need a couple of things:

-   Composer 2
-   MySQL
-   PHP 8.2
-   Node 16+
-   Yarn
-   Laravel 10+
-   Laravel Valet or Homestead

-    Pusher account and an app setup (Pusher account is free and setting up an app is simple) (If not setup, see Setup-Pusher-App [https://www.vikramatech.co/article/setup-pusher-app] )

## Setup Project

-   Clone this repository and `cd` into the directory
-   Install composer packages with `composer install`
-   Install node packages with `yarn`
-   Run `cp .env.example .env`
-   Edit your `.env` file to update the database credentials
-   Setup an application key with `php artisan key:generate`
-   Run migrations with `php artisan migrate:fresh`

-   Setup environemt variables for Pusher (PUSHER_APP_ID, PUSHER_APP_KEY, PUSHER_APP_SECRET)
   
## How To Run
-   <code>php artisan serve</code>
-   <code>php artisan queue:listen</code>
-   <code>yarn run dev</code>

## Development

When working on this project, you need to keep a few things in mind:

-   The backend is written in Laravel (10+, on PHP 8.2+).
-   The frontend is written in React (TypeScript).
-   For communication between Laravel and React, we rely on Inertia.
-   To make life a little easier, we utilize [Laravel Data](https://github.com/spatie/laravel-data) together with [TypeScript Transformer](https://github.com/spatie/typescript-transformer) to allow for easy type generation and to avoid rewriting classes in various locations. This generates TypeScript files when running `php artisan typescript:transform`
