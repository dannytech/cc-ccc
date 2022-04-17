D("champlain.dn42!forward", REG_NONE, DnsProvider(DNS_BIND),
    NAMESERVER("ns-1.champlain.dn42."),
    NAMESERVER("ns-2.champlain.dn42."),

    // primary nameserver
    A("ns-1", "172.23.119.66"),
    AAAA("ns-1", "fde6:a552:874f:53::1"),

    // secondary nameserver
    A("ns-2", "172.23.119.67"),
    AAAA("ns-2", "fde6:a552:874f:53::2"),

    // looking glass
    A("lg", "172.23.119.78"),
    AAAA("lg", "fde6:a552:874f:1c2d:dc77:2aff:feb5:73")
)
