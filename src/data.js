const data = [
    {
        id: "1",
        title: "Mount Fuji",
        location: "JAPAN",
        yandexMapsUrl: "https://yandex.ru/maps/?ll=138.562375%2C34.971883&mode=search&sll=39.307699%2C48.573896&sspn=0.361176%2C0.137154&text=mount%20fuji&z=8.44",
        startDate: "12 Jan, 2021",
        endDate: "24 Jan, 2021",
        description: "At 3776m above sea level, Mount Fuji is the tallest mountain in Japan, and also an extremely distinctive feature of Japan’s geography. Rising above the clouds, this icon of Japan has provided a spiritual basis for the Japanese since ancient times. ",
        imageUrl: "https://yandex-images.clstorage.net/5KOzc0235/3411ffPk_frV/8GqPl-ATndSuRcf2BiWwFdUefRZ3DG5DO3LFgOlA_h-wBzPvevohrtFgtNpFFRLJO8eJRWpD9itr2pb3cDjukLF-SzPBhnjQn9CHdjZ1kcABL2zT10m_5x63AYBskDs6oWJWexofdQrx9bIp8icw_5kkjqIN5ILOHi9TtpTsyuYS3pwG5gLvFesFdtdFVdHj5F7s0lfJTEHM1NAlThetrhfABigPD7TbBnAROhGX8H6IpM4RHyTALM-ck2ZDnbok0FpPJgfhf3T7tNbGlTRDoRUtHGJ3G72jnzWC985U7k9moQfbHDyHG3Ziwfhy58BtS1VOA9xWI2yvXZEn0QyLNrHqfZeWY98FeMVWhpRVU2MHvU0CpDjOIwz3wDZcNIzPh-HWSO7v5xslMZG4guZw_Up1zLFMNIBvLC1zJXOuuKWiek6Vt-GN5quFNtWX56FztR2M0mQariHvl5DE3IfO3hSgldpNTmQYpIIjqtDXYL0KtR5AzwUDvZ4dAMXDP8smkYnMNcQz3rWJ5He11Qfz4pVcn0JGmN9Tr8Tgp-93Hq-HMcZZXV2k6RRB0clwlTNPW4Vc4N4XUT4cfaCWMM8bVdE6zITkch83C5RG9lZ1MWH3PS7BJavcsW2VYkb-xq4dxqLmOI0_RHt2kcGIwKSiDtm2zbIuRuF_rm3ydXMsqvXAGv-3RfJfFQpnJKe21NEzd6x_MSVKDAG8NYJG7CZ87gcT58pdXVS61BPhWmEEM945ZT0yPaUxDCwPI4ZAHzt0Y5gu9VZBnWVIZTZ2dtfAo2WMjcHV6gzDTTbg5z8nfK0XcdTZPpxn6USQYTuAt9K82xd9Y3_XYG8djiPVAP-7VNGLnzW1wa112ATEtXf3ozPHXx4hlPneA0-kwtTNdo4-h8Ik-AyMh6m3MCN6YBYx3Dr1T1CO1nHfPA3SppIfS3aRe40UtuHtFBiHFHalFfLTR6z904db_3McxZLW8"
    },
    {
        id: "2",
        title: "Sydney Opera House",
        location: "AUSTRALIA",
        yandexMapsUrl: "https://yandex.ru/maps/org/sidneyskiy_operny_teatr/100083652053/?from=tabbar&ll=150.871688%2C-33.834439&mode=search&sll=150.871688%2C-33.833592&source=serp_navig&text=sydney%20opera%20house&z=4",
        startDate: "27 May, 2021",
        endDate: "08 Jun, 2021",
        description: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.",
        imageUrl: "https://sportishka.com/uploads/posts/2022-04/thumbs/1650551836_39-sportishka-com-p-opernii-teatr-v-sidnee-krasivo-foto-52.jpg"
    },
    {
        id: "3",
        title: "Geirangerfjord",
        location: "NORWAY",
        yandexMapsUrl: "https://yandex.ru/maps/?from=tabbar&ll=7.038502%2C62.168532&mode=search&sll=7.038502%2C62.167840&source=serp_navig&text=Geirangerfjord&z=9",
        startDate: "01 Oct, 2021",
        endDate: "18 Nov, 2021",
        description: "The Geirangerfjord is one of Norway's most visited tourist sites. In 2005, it was listed as a UNESCO World Heritage Site, jointly with the Nærøyfjorden. This status was challenged by the disputed plans to build power lines across the fjord.",
        imageUrl: "https://yandex-images.clstorage.net/5KOzc0235/3411ffPk_frV/8GqPl-ATndSuRcf2BiWwFdUefRZ3DG5DO3KloMwg7kqQR3PPf59knpEVkZ-AAHL8C5f5IGo2Rm5bWiOHNXjeILQOSzPx5kiQH6CHdjZ1kcABL2zT10m_5x63AYBskDs6oWJWexofdQrx9bIp8icw_5kkjqIN5ILOHi9TtpTsyuYS3pwG5gLvFesFdtdFVdHj5F7s0lfJTEHM1NAlThetrhfABigPD7TbBnAROhGX8H6IpM4RHyTALM-ck2ZDnbok0FpPJgfhf3T7tNbGlTRDoRUtHGJ3G72jnzWC985U7k9moQfbHDyHG3Ziwfhy58BtS1VOA9xWI2yvXZEn0QyLNrHqfZeWY98FeMVWhpRVU2MHvU0CpDjOIwz3wDZcNIzPh-HWSO7v5xslMZG4guZw_Up1zLFMNIBvLC1zJXOuuKWiek6Vt-GN5quFNtWX56FztR2M0mQariHvl5DE3IfO3hSgldpNTmQYpIIjqtDXYL0KtR5AzwUDvZ4dAMXDP8smkYnMNcQz3rWJ5He11Qfz4pVcn0JGmN9Tr8Tgp-93Hq-HMcZZXV2k6RRB0clwlTNPW4Vc4N4XUT4cfaCWMM8bVdE6zITkch83C5RG9lZ1MWH3PS7BJavcsW2VYkb-xq4dxqLmOI0_RHt2kcGIwKSiDtm2zbIuRuF_rm3ydXMsqvXAGv-3RfJfFQpnJKe21NEzd6x_MSVKDAG8NYJG7CZ87gcT58pdXVS61BPhWmEEM945ZT0yPaUxDCwPI4ZAHzt0Y5gu9VZBnWVIZTZ2dtfAo2WMjcHV6gzDTTbg5z8nfK0XcdTZPpxn6USQYTuAt9K82xd9Y3_XYG8djiPVAP-7VNGLnzW1wa112ATEtXf3ozPHXx4hlPneA0-kwtTNdo4-h8Ik-AyMh6m3MCN6YBYx3Dr1T1CO1nHfPA3SppIfS3aRe40UtuHtFBiHFHalFfLTR6z904db_3McxZLW8"
    }
]

export default data;