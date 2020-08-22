<?php
/*
 * *
 *  *  * Copyright (C) Woosu Automative India Private Limited - All Rights Reserved
 *  *  * Unauthorized copying of this file, via any medium is strictly prohibited
 *  *  * Proprietary and confidential
 *  *  * Written by Sathish Kumar(satz) <sathish.thi@gmail.com>ManiKandan<smanikandanit@gmail.com >
 *  *
 *
 */

namespace OptimoApps\BardTextAlign\Tests\Unit;


use OptimoApps\BardTextAlign\Tests\TestCase;
use Statamic\Fieldtypes\Bard;

class BardTextAlignTest extends TestCase
{
    protected Bard $bard;

    public function setUp(): void
    {
        parent::setUp();
        $this->bard = new Bard();
    }

    /* test */
    public function test_text_align_mark(): void
    {
        $data = [
            [
                'type' => 'paragraph',
                'content' => [
                    ['type' => 'text', 'marks' => [['type' => 'text-align', 'attrs' => ['align' => 'center']]], 'text' => 'Text Align Center'],
                ],
            ],
        ];

        $expected = '<p><span style="text-align:center;display :block">Text Align Center</span></p>';
        self::assertEquals($expected, $this->bard->augment($data));
    }
}