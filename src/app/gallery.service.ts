import { Injectable, signal } from '@angular/core';

const DEFAULT_IMAGES = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDfzCdWFwWkGAFNba2ws4UavmCJF6q0XAUxiKk10uwPNyFMabGMKbD5wsmTKAhtpW4KYj6uPMK2PopqKOK3B7CaYu_7dVqPrM6rm5zDOWju3mbIj5Al4GKyokemNHK5-3S9UBpPiwCJvhMAE3JJ9-QsR1nSSbUdKOGIJmiSRRllKcDmv3xdGTMp8FxCf4Ew_e2eNA3rNZ1BZ56f45edxPImmJxcnGNMBHH1bSIXggISraAP1T4b4D2h9wTj5tvzyMfpKEX8nhmGLOs',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCrQXnC_Ru9HP-Vj1Jfrv2OJ-ICUB4ydh92lTRuZhfgDDTexu98nhqMDiJEn9vPpN6cfE9YUmvzGuxK_wOU2x3w3kwBsWuVgePqYR9-IKqi0VnzKqI5P4O7rYxFLv_N1uP6Qm4TqMiiUfdK87n_sWDRTECzoZTBZpJcn5yTN_IfDlt3BYtA8lL1qsN1l9cYgKuNQO8pquxqoCJnrWGBBeE-869REwNzHmVmuVnJPmyvCICpl3NtADSW2rmoPQMT1byur5jjhOuF8Hk',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC16jVlylRa-UtF8RoI8NHtbWk3f-V4rsq1fIA51mZDpQo7Ah7mDnw46JAPo8S-93Mb30i4zFKKaO0OB2ZQtYgKVZnyhH08ezmDvovl0Fp5h7z-KOQyy23pkFJvXLrGJ1teAgsjgMXtAg614m4bQq7SkWGfHYevudHv4zME0UqBGU12qaNPoioUL63yhvRhzO843cZ2fYhxtkWUW2rdEVoJkb10GjuhA2f4u8edLZCvlxTzWOQI26XyuSLsu_Ya10mJWmmaGv9ufDc',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBe7lM-QpRWZ8kLyfaFV2ts4fJIGZxfTDKHsry7_7OZ49lL2-D5woWaq4a09kImYSF9xqgLCdBrClb_i7VXWYxyXBhK2BMsTunYmI-OVC-UmzDYjEenFutuTIATWqYaVe373dead6HB8y8JugOte4Rl0wk1o-HTrsWYvBf5PDy4GC7GxLCXXNiIiqIZaf6W47OduE7rWmJORX2LtpAcl5fgmtcY4Hgg-SsDoTWg5AbKt3RIgm7SEzj6KFMCEqBiH3Kw5W8SRAWmkvQ',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBVQ2MvKjBN5bWmdDwdg9HTxmcF-fo4ikyCG5Yof-U4eQnaOLx7tVW3NirXTKEDZOElLowHHbE-Qf5T6d032ZTNNbjr0TBSbgL3cHjoPGF5rwj5xTxsk-nBkoyLrxjuevr5GaO0EBYqD3lO_9nRgFiwBWIMJ1GYfc__bQTdJIhqJZ96y879e1LLvSYzl48b85jCb1WdmKSlojLrksiRlg9qgRuSRzCZMtSjtWE9ot_RuGuZQQF2QD0ATBY66rpLOhCLaubOMAbNZVU',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCEAT91cdTEYgMXCcbTGWvkW_EitS4cHiS8B-XVN2MdI0ALfFJf5GeKjw-MzL6O2hA-g03AYN0XmanhIDQNFHID177kQjpT_v6STsmJsWV4RsujLZXSm9oVXoPlrdKV_L_-bJO6cXWPnQgOmH9yJ63XgBYSLSrpNjdCqZeOBKTSfw-PeRr7mFKFDgYfVwRstqbdz29pvRBVje1SZrSP3nt56WrTpPolszE-6Pd03gv7MQB6Lk0wMmUmXDgopdyo1aOpAt9-GxTAbAM',
];

const STORAGE_KEY = 'luxe_gallery_images';

@Injectable({ providedIn: 'root' })
export class GalleryService {
  private _images = signal<string[]>(this.load());

  images = this._images.asReadonly();

  private load(): string[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : DEFAULT_IMAGES;
    } catch { return DEFAULT_IMAGES; }
  }

  updateImages(images: string[]) {
    this._images.set(images);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(images));
  }

  addImage(url: string) {
    const updated = [...this._images(), url];
    this.updateImages(updated);
  }

  removeImage(index: number) {
    const updated = this._images().filter((_, i) => i !== index);
    this.updateImages(updated);
  }

  reset() { this.updateImages(DEFAULT_IMAGES); }
}
