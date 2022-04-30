D(REV("172.23.119.64/27") + "!reverse", REG_NONE, DnsProvider(DNS_BIND),
    NAMESERVER("ns-1.champlain.dn42."),
    NAMESERVER("ns-2.champlain.dn42."),

    PTR("172.23.119.66", "ns-1.champlain.dn42."),
    PTR("172.23.119.67", "ns-2.champlain.dn42."),

    PTR("172.23.119.78", "lg.champlain.dn42.")
)
