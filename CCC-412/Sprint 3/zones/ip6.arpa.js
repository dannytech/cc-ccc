D(REV("fde6:a552:874f::/48") + "!reverse6", REG_NONE, DnsProvider(DNS_BIND),
    NAMESERVER("ns-1.champlain.dn42."),
    NAMESERVER("ns-2.champlain.dn42."),

    PTR("fde6:a552:874f:1c2d:60c7:a0ff:fecd:b5b", "ns-1.champlain.dn42."),
    PTR("fde6:a552:874f:1c2d:48b2:90ff:fe68:91df", "ns-2.champlain.dn42.")
)
