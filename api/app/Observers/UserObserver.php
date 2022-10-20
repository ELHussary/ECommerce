<?php

namespace App\Observers;


use App\Models\User;
use Nuwave\Lighthouse\Execution\Utils\Subscription;

class UserObserver
{
    /**
     * Handle the post "created" event.
     *
     * @param  \App\User  $user
     * @return void
     */
    public function created(User $user): void
    {

        Subscription::broadcast('userCreated', $user);
    }
}
