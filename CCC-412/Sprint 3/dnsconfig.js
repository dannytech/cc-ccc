var REG_NONE = NewRegistrar("none", "NONE")
var DNS_BIND = NewDnsProvider("bind", "BIND", {
    "default_soa": {
        "master": "ns-1.champlain.dn42.",
        "mbox": "dn42.daniel.hellstern.org.",
        "refresh": 3600,
        "retry": 600,
        "expire": 604800,
        "minttl": 1440
    }
})

require("zones/champlain.dn42.js")
require("zones/in-addr.arpa.js")
require("zones/ip6.arpa.js")
