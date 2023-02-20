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
import TextAlignButton from "./TextAlignButton";

Statamic.$bard.extend(() => TextAlign);
Statamic.$bard.buttons((buttons) => {
  buttons.splice(_.findIndex(buttons, { name: "alignleft" }), 1, {
    name: "left",
    text: "Text Align Left",
    command: "textAlign",
    args: { align: "left" },
    icon: "align-left",
    component: TextAlignButton,
  });
  buttons.splice(_.findIndex(buttons, { name: "alignright" }), 1, {
    name: "right",
    text: "Text Align Right",
    command: "textAlign",
    args: { align: "right" },
    icon: "align-right",
    component: TextAlignButton,
  });
  buttons.splice(_.findIndex(buttons, { name: "aligncenter" }), 1, {
    name: "center",
    text: "Text Align Center",
    command: "textAlign",
    args: { align: "center" },
    icon: "align-center",
    component: TextAlignButton,
  });
  buttons.splice(_.findIndex(buttons, { name: "alignjustify" }), 1, {
    name: "justify",
    text: "Text Align Justify",
    command: "textAlign",
    args: { align: "justify" },
    icon: "align-justify",
    component: TextAlignButton,
  });
});
