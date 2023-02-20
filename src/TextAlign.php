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

use Tiptap\Core\Mark;
use Tiptap\Utils\HTML;

class TextAlign extends Mark
{
    public static $name = 'textAlign';

    public function parseHTML()
    {
        return [
            [
                'style' => 'text-align',
            ],
        ];
    }

    public function renderHTML($mark, $attributes = [])
    {
        return [
            'span',
            HTML::mergeAttributes([
                'style' => "text-align:{$mark->attrs->align}; display: block;",
            ], $attributes),
            0,
        ];
    }
}
