---

title: Lede Einleitung
---

Auf einer Seite, die mit mindestens `typography.plainParagraphsMin`={{< param typography.PlainParagraphsMin >}} regulären Absätzen beginnt, wird der erste Absatz als Lede dargestellt. Wenn der zweite Absatz mindestens `typography.initialParaMinLength`={{< param typography.InitialParaMinLength >}} Zeichen lang ist, beginnt er mit einem großen Anfangsbuchstaben.

Dies kann auch erreicht werden, indem man zwei beliebige Absätze in den `lede-initial` Shortcode einwickelt. Der Shortcode stellt das Lede unabhängig von der Anzahl der Absätze dar. Wenn es einen zweiten Absatz gibt, stellt er den großen Anfangsbuchstaben unabhängig von seiner Länge dar.

```markdown
{{</* lede-initial */>}}
Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga

Xerum
{{</* /lede-initial */>}}
```

{{% lede-initial %}}
Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga

Xerum
{{% /lede-initial %}}

```markdown
{{</* lede-initial */>}}
Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.{{</* /lede-initial */>}}
```

Das obenstehende wird wie folgt dargestellt:

{{% lede-initial %}}
Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.{{% /lede-initial %}}

---
