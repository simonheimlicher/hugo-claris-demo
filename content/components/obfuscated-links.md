---
title: Obfuscated links
description: Hugo Claris comes with a module that allows delivering email addresses, phone numbers and other URLs in an encrypted form, which can only be decrypted in browsers with JavaScript enabled
---

The following link will display as [user@example.com](mailto:user@example.com) even though the URL `user@example.com` does not appear in the source code: {{< obfuscated-email plain="user@example.com" >}}

You can change the text to be displayed as the link to be {{< obfuscated-email plain="user@example.com" text="anything you want" >}}
