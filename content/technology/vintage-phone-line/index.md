+++
title = "POTS: Plain Old Telephone Service"
subtitle = "Learn about the two wires that connect your home to the world-wide world of the Internet"
date = "2001-03-17T10:07:48Z"
bestbefore = "2006-03-17"
categories = ["How-to"]
tags = ["Modem", "Phone line"]
description = "Tuning your phone line is key to optimize the performance of your modem, especially with the more recent V.90 standard"
[image.feature]
  resource = "images/vintage-phone"
  alt = "Photo of a vintage phone"
  title = "Vintage phone"
+++

As you are probably aware, the phone line was never meant to be used for transmission of data. Nonetheless, for many of us, it is still the only way to, well, transmit data. In the article below, I provide some tips on how to tune the phone line to increase throughput of your modem.

Believe it or not, a telephone is one of the simplest devices in your house. So simple, in fact, that if you had an antique phone from the 1920s, you could connect it to your modern wall jack, and it would work just fine! Time to dust off that vintage rotary dial phone and give it a spin!

## Plain Old Telephone Systems (POTS) Explained

Your regular telephone line is called a "Plain Old Telephone System" or POTS, and it has not changed in nearly a century. It consists of one wire pair carrying full duplex audio and the operating current for the telephone. It's powered by a current-limited 48V power source, but can vary from 24V to 60V, depending on the application.

The telephone line wires are commonly referred to as TIP and RING, which originated from plugboard terminology. These names are related to the 1/4" phone plugs used in the early days of manual telephone switchboards.

{{< responsive-image resource="images/vintage-phone" alt="Vintage telephone" float="right" >}}

The typical telephone line bandwidth is around 180-3200 Hz, which was deemed sufficient for speech intelligibility back in the day. The low end is rolled off to avoid interference from mains frequency (50 or 60 Hz) and keep telephone transformer size small. The high end cut off is caused by the telephone transmission system, as the audio is digitized at 8 kHz.


The telephone line is a balanced voice path, meaning the two wires (TIP and RING) are only referenced to each other. This design allows signals to travel for miles without expensive shielding, using common mode rejection to remove noise that is induced onto both wires. It's a clever way to make sure your gossip stays crystal clear!

## Telephone Line: Full Duplex Superstar

Telephones operate in full duplex mode, meaning both people can talk at the same time without any issues. To achieve this, a two-wire to four-wire hybrid circuit is used, which converts the pair into separate transmit and receive audio paths.

The hybrid circuit isn't perfect, though. You might get around 20-30 dB of isolation between signals going in different directions. Usually, this doesn't cause problems, but in long-distance calls, it can be irritating. Good thing we have adaptive echo cancellers to save the day!

## Fun Fact: International Telephone Standards Chaos

Did you know that telephone standards vary from country to country? It's true! Different wiring practices, connectors, line impedances, nominal loop currents, signaling tones, and electrical safety regulations all contribute to this global mishmash. But hey, at least it keeps things interesting!

So there you have it, folks! Your trusty old telephone is not just a relic of the past, but a fascinating piece of technology that has stood the test of time. Just remember, no matter how old your phone is, it's still perfect for those late-night chats with friends and family.

------

Content credit: [ChatGPT by OpenAI](https://chat.openai.com/?model=gpt-4)

Photo by <a href="https://unsplash.com/@pawel_czerwinski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pawel Czerwinski</a> on <a href="https://unsplash.com/photos/-0xCCPIbl3M?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

