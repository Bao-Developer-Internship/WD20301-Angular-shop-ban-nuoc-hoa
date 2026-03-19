import { Component } from '@angular/core';

export interface Collection {
  title: string;
  subtitle: string;
  img: string;
}

@Component({
  selector: 'app-featured-collections',
  templateUrl: './featured-collections.html',
})
export class FeaturedCollections {
  collections: Collection[] = [
    {
      title: 'Heritage Collection',
      subtitle: 'Gói trọn linh hồn Việt Nam',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDL14fiuJt210LBrq0xkxV6wFlMtDKmv7dnkUEvZJG1Zc9EMbfQeRT6JaKxF-rXRv6DRINeuRSyk01nyf5Ey3khvw7hUQnQKNGurt-ZVIEMhJ6jaVVCSrXhDJju-T_Dg788fVzPn7NTPXF1HgosWb9wOrSu0uHqbXY8v4sPdxo0JvIDGk1bmMr1LTBOtNU_Xm-1z8W5LZxfUYUwzgYqT8OcCCmpxKYs24dbZHujY1M8E8s5mLNXEtJZUJ2Iykgh6Cgn_ufxpB-XUfg',
    },
    {
      title: 'Royal Signature',
      subtitle: 'Sự sang trọng vĩnh cửu',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDChwV92BNZKeec7bKWJaSKoh7JX3pGwxfjQsVpl6jy30dMu-TTdWV1VkU4OTCx5w9FsZjiBDIXvx72g2mc42A4tb6R35Qkfhdzu9eiC6tSxdsd1_pPJLkmcaZ7bvmvNZbDRwjtv0UuPB_k14KT_f2qHtz6jlT9txsIaTr9NxeJwpH4KXRNSIWaJYiRBc8TTG6enqLsaBsiKtSJnigsO87aENsPgqSIudyBlmCL4ARC34G4w_5txGoq6XaUHbV9mQUXCS8YymO1HS0',
    },
    {
      title: 'Winter Noir',
      subtitle: 'Nốt hương đêm huyền bí',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFgUxejAs5ioDx1a8vczlAaO6qw9LdusEP99y7wU051djrrbRynD5kMUe14rJPYeB_TMSmQVHoJldzpHpiuH5AnjAR4VJfFwPp3hKbt1ETxQqlpcV2_gtGKeEz1BMtLZjEVdnEtLwvM9SrzdOuP9D_KooPd4SVLUaVAVPuHZbFmxjDfi77PUzsphRi5iszyDaCUWKCFnQduYZnA6G8Y9-RVXwqUszAHOS6q9ICrWho9wA2zzsP-fb2S01_6yAzOaeNjee8m_dhe1Q',
    },
  ];
}
