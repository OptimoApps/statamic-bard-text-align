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

use ProseMirrorToHtml\Marks\Mark;

class TextAlign extends Mark
{
    protected $markType = 'textAlign';
    protected $tagName = 'span';

    public function matching(): bool
    {
        return $this->mark->type === $this->markType;
    }

    public function tag(): ?array
    {
        return [
            ['tag' => 'span',
                'attrs' => [
                    'style' => "text-align:{$this->mark->attrs->align};",
                ],
            ],
        ];
    }
}
