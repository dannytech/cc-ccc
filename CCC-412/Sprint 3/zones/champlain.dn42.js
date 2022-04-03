D("champlain.dn42!forward", REG_NONE, DnsProvider(DNS_BIND),
    NAMESERVER("ns-1.champlain.dn42."),
    NAMESERVER("ns-2.champlain.dn42."),

    // primary nameserver
    A("ns-1", "172.23.119.66"),
    AAAA("ns-1", "fde6:a552:874f:1c2d:60c7:a0ff:fecd:b5b"),

    // secondary nameserver
    A("ns-2", "172.23.119.67"),
    AAAA("ns-2", "fde6:a552:874f:1c2d:48b2:90ff:fe68:91df")
)
