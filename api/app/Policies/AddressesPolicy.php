<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Addresses;
use Illuminate\Auth\Access\HandlesAuthorization;

class AddressesPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */

    public function update(User $user, Addresses $addresses)
    {
        return $user->id === $addresses->user_id;
    }

    public function delete(User $user, Addresses $addresses)
    {
        return $user->id === $addresses->user_id;
    }
}
