---
title: Obfuscated links
description: The Hugo Claris theme comes with a module that allows delivering email addresses, phone numbers and other URLs in an encrypted form, which can only be decrypted in browsers with JavaScript enabled
---

Even though the URL `user@example.com` does not appear in the source code, you will see this email address as a clickable hyperlink, at least if you have JavaScript enabled: {{< obfuscated-email plain="user@example.com" >}}.

This is based on the shortcode `obfuscated-email`.

## Shortcode `obfuscated-email`

You can change the text to be displayed as the clickable hyperlink to be {{< obfuscated-email plain="user@example.com" text="anything you want" >}}.

```markdown
You can change the text to be displayed as the link to be {{</* obfuscated-email plain="user@example.com" text="anything you want" */>}}.
```

## Shortcode `obfuscated-link`

There is a similar but more general shortcode named `obfuscated-link`, which accepts an arbitrary URL and protects it from prying eyes.

While whitespace around the {{< obfuscated-link plain="tel:+1555 55 55" text="obfuscated link" >}} is preserved, 
punctuation, such as {{< obfuscated-link plain="https://secret.example.com" text="a comma" >}}, is appended without whitespace.

```markdown
While whitespace around the {{</* obfuscated-link plain="tel:+1555 55 55" text="obfuscated link" */>}} is preserved,
punctuation, such as {{</* obfuscated-link plain="https://secret.example.com" text="a comma" */>}}, is appended without whitespace.
```

