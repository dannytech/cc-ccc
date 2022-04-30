D(REV("fde6:a552:874f::/48") + "!reverse6", REG_NONE, DnsProvider(DNS_BIND),
    NAMESERVER("ns-1.champlain.dn42."),
    NAMESERVER("ns-2.champlain.dn42."),

    PTR("fde6:a552:874f:53::1", "ns-1.champlain.dn42."),
    PTR("fde6:a552:874f:53::2", "ns-2.champlain.dn42."),

    PTR("fde6:a552:874f:1c2d:dc77:2aff:feb5:73", "lg.champlain.dn42.")
)
