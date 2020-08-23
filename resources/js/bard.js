/*
 * *
 *  *  * Copyright (C) optimoapps.com - All Rights Reserved
 *  *  * Unauthorized copying of this file, via any medium is strictly prohibited
 *  *  * Proprietary and confidential
 *  *  * Written by Sathish Kumar(satz) <sathish.thi@gmail.com>, ManiKandan<smanikandanit@gmail.com >
 *  *
 *
 */

import TextAlign from "./TextAlign";

Statamic.$bard.extend(({mark}) => mark(new TextAlign()));
Statamic.$bard.buttons(buttons => {
    const indexOfBold = _.findIndex(buttons, {command: 'italic'});
    buttons.splice(indexOfBold + 1, 0, {
        name: 'left', text: 'Text Align Left', command: 'textAlign', args: {align: 'left'}, icon: 'align-left'
    });
    buttons.splice(indexOfBold + 2, 0, {
        name: 'right', text: 'Text Align Right', command: 'textAlign', args: {align: 'right'}, icon: 'align-right'
    });
    buttons.splice(indexOfBold + 3, 0, {
        name: 'center',
        text: 'Text Align Center',
        command: 'textAlign',
        args: {align: 'center'},
        icon: 'align-center'
    });
    buttons.splice(indexOfBold + 4, 0, {
        name: 'justify',
        text: 'Text Align Justify',
        command: 'textAlign',
        args: {align: 'justify'},
        icon: 'align-justify'
    });
});