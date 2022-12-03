<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->boolean('is_admin')->default(false);
            $table->string('image')->nullable();
            $table->string('password');
            $table->text('about_me')->nullable();
            $table->text('contact_me')->nullable();
            $table->text('about_me_title')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });

        $admin = new User;
        $admin->name = config('admin.name');
        $admin->email = config('admin.email');
        $admin->is_admin = true;
        $admin->password = bcrypt('password');
        $admin->save();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
