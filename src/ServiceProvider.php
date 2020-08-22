<?php
/*
 * *
 *  *  * Copyright (C) optimoapps.com - All Rights Reserved
 *  *  * Unauthorized copying of this file, via any medium is strictly prohibited
 *  *  * Proprietary and confidential
 *  *  * Written by Sathish Kumar(satz) <sathish.thi@gmail.com>, ManiKandan<smanikandanit@gmail.com >
 *  *
 *
 */

namespace OptimoApps\BardTextAlign;


use Statamic\Fieldtypes\Bard\Augmentor;
use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
    protected $scripts = [
        __DIR__.'/../dist/js/textalign.js',
    ];

    public function boot(){
        parent::boot();
        Augmentor::addMark(TextAlign::class);
    }
}