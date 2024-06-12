import image1 from '../assets/images/geforce-rtx-3080.png';
import image2 from '../assets/images/amd-radeon-rx-6800-xt.jpg';
import image3 from '../assets/images/nvidia-geforce-gtx-1660-ti.jpg';
import image4 from '../assets/images/amd-radeon-rx-5600-xt.jpg';
import image5 from '../assets/images/nvidia-cmp-30hx.png';
import image6 from '../assets/images/amd-radeon-rx-5700-xt.jpg';
import image7 from '../assets/images/nvidia-quadro-rtx-6000.jpg';
import image8 from '../assets/images/amd-radeon-pro-wx-9100.png';
import image9 from '../assets/images/nvidia-quadro-p2000.jpg';
import image10 from '../assets/images/amd-radeon-pro-wx-7100.jpg';
import image11 from '../assets/images/nvidia-tesla-v100.jpg';
import image12 from '../assets/images/amd-radeon-instinct-mi100.jpeg';
import image13 from '../assets/images/nvidia-a100-tensor-core-gpu.jpg';
import image14 from '../assets/images/amd-radeon-pro-VII.jpg';
import image15 from '../assets/images/nvidia-tesla-t4.jpg';
import image16 from '../assets/images/amd-radeon-pro-v340.jpg';
import image17 from '../assets/images/nvidia-rtx-a6000.jpg';
import image18 from '../assets/images/amd-radeon-instinct-mi25.jpg';
import image19 from '../assets/images/nvidia-jetson-nano.jpg';
import image20 from '../assets/images/amd-ryzen-embedded-v1000-series.jpg';
import image21 from '../assets/images/intel-iris-xe-graphics.webp';
import image22 from '../assets/images/qualcomm-adreno-650.png';
import image23 from '../assets/images/apple-a14-bionic-gpu.jpg';
import image24 from '../assets/images/arm-mali-g78-mp14.png';
import image25 from '../assets/images/nvidia-quadro-rtx-4000.jpg';
import image26 from '../assets/images/amd-radeon-pro-wx5100.jpg';
import image27 from '../assets/images/nvidia-quadro-p5000.jpg';
import image28 from '../assets/images/amd-radeon-pro-wx3200.jpeg';
import image29 from '../assets/images/nvidia-rtx-3090.png';

export const videoCardsData = [
  {
    id: 1,
    title: 'NVIDIA GeForce RTX 3080',
    price: '$492',
    content: 'The GeForce RTX™ 3080 Ti and RTX 3080 graphics cards deliverthe performance that gamers crave, powered by Ampere—NVIDIA’s 2nd gen RTX architecture. They are built with dedicated 2nd gen RT Cores and 3rd gen Tensor Cores, streaming multiprocessors, and G6X memory for an amazing gaming experience.',
    img: image1,
    manufacturer: 'NVIDIA',
    memorySize: '10GB',
    gpuFrequency: '1400 MHz',
    busWidth: '320-bit',
    category: 'Gaming',
  },

  {
    id: 2,
    title: 'AMD Radeon RX 6800 XT',
    price: '$628',
    content: 'The AMD Radeon™ RX 6800 XT graphics card, powered by AMD RDNA™ 2 architecture, featuring 72 powerful enhanced Compute Units, 128 MB of all new AMD Infinity Cache and 16GB of dedicated GDDR6 memory, is engineered to deliver ultra-high frame rates and serious 4K resolution gaming.',
    img: image2,
    manufacturer: 'AMD',
    memorySize: '16GB',
    gpuFrequency: '2000 MHz',
    busWidth: '256-bit',
    category: 'Gaming',
  },

  {
    id: 3,
    title: 'NVIDIA GeForce GTX 1660 Ti',
    price: '$328',
    content: 'Other details of note: the GTX 1660 Ti features 6GB of super-fast GDDR6 VRAM, as used on GeForce RTX GPUs, and a 192-bit memory interface, giving it 50% more memory bandwidth than the GTX 1060. Out of the box, GPU Boost Clocks start at 1770 MHz, though several partner cards push that number higher, and some have advanced custom coolers that enable overclockers to hit up to 1950 MHz on air (in our testing). And power efficiency is up to 1.4x higher, enabling a substantial performance boost at the same 120 Watt TDP.',
    img: image3,
    manufacturer: 'NVIDIA',
    memorySize: '6GB',
    gpuFrequency: '1700 MHz',
    busWidth: '192-bit',
    category: 'Gaming',
  },

  {
    id: 4,
    title: 'AMD Radeon RX 5600 XT',
    price: '$281',
    content: "The Radeon RX 5600 XT is a performance-segment graphics card by AMD, launched on January 21st, 2020. Built on the 7 nm process, and based on the Navi 10 graphics processor, in its Navi 10 XLE variant, the card supports DirectX 12. This ensures that all modern games will run on Radeon RX 5600 XT. The Navi 10 graphics processor is an average sized chip with a die area of 251 mm² and 10,300 million transistors. Unlike the fully unlocked Radeon RX 5700 XT, which uses the same GPU but has all 2560 shaders enabled, AMD has disabled some shading units on the Radeon RX 5600 XT to reach the product's target shader count.",
    img: image4,
    manufacturer: 'AMD',
    memorySize: '6GB',
    gpuFrequency: '1300 MHz',
    busWidth: '192-bit',
    category: 'Gaming',
  },

  {
    id: 5,
    title: 'NVIDIA CMP 30HX',
    price: '$799',
    content: 'It features 1408 shading units, 88 texture mapping units, and 48 ROPs. NVIDIA has paired 6 GB GDDR6 memory with the CMP 30HX, which are connected using a 192-bit memory interface. The GPU is operating at a frequency of 1530 MHz, which can be boosted up to 1785 MHz, memory is running at 1750 MHz (14 Gbps effective).',
    img: image5,
    manufacturer: 'NVIDIA',
    memorySize: '6GB',
    gpuFrequency: '1700 MHz',
    busWidth: '192-bit',
    category: 'Mining',
  },

  {
    id: 6,
    title: 'AMD Radeon RX 5700 XT',
    price: '$436',
    content: 'The Radeon RX 5700 XT is a high-end graphics card by AMD, launched on July 7th, 2019. Built on the 7 nm process, and based on the Navi 10 graphics processor, in its Navi 10 XT variant, the card supports DirectX 12. This ensures that all modern games will run on Radeon RX 5700 XT. The Navi 10 graphics processor is an average sized chip with a die area of 251 mm² and 10,300 million transistors. It features 2560 shading units, 160 texture mapping units, and 64 ROPs. AMD has paired 8 GB GDDR6 memory with the Radeon RX 5700 XT, which are connected using a 256-bit memory interface.',
    img: image6,
    manufacturer: 'AMD',
    memorySize: '8GB',
    gpuFrequency: '1700 MHz',
    busWidth: '256-bit',
    category: 'Mining',
  },

  {
    id: 7,
    title: 'NVIDIA Quadro RTX 6000',
    price: '$6,299',
    content: 'Equipped with 4608 CUDA cores, 576 Tensor cores, 72 RT Cores and massive 24GB GDDR6 memory, Quadro RTX 6000 can render complex models and scenes with physically accurate shadows, reflections, and refractions to empower users with instant insight.',
    img: image7,
    manufacturer: 'NVIDIA',
    memorySize: '24GB',
    gpuFrequency: '1700 MHz',
    busWidth: '384-bit',
    category: 'Workstation',
  },

  {
    id: 8,
    title: 'AMD Radeon Pro WX 9100',
    price: '$946',
    content: 'It features 4096 shading units, 256 texture mapping units, and 64 ROPs. AMD has paired 16 GB HBM2 memory with the Radeon Pro WX 9100, which are connected using a 2048-bit memory interface. The GPU is operating at a frequency of 1200 MHz, which can be boosted up to 1500 MHz, memory is running at 945 MHz.',
    img: image8,
    manufacturer: 'AMD',
    memorySize: '16GB',
    gpuFrequency: '1300 MHz',
    busWidth: '2048-bit',
    category: 'Workstation',
  },

  {
    id: 9,
    title: 'NVIDIA Quadro P2000',
    price: '$498',
    content: 'It features a Pascal GPU with 1024 CUDA cores, large 5 GB GDDR5 on-board memory, and the power to drive up to four 5K (5120x2880 @ 60Hz) displays natively.',
    img: image9,
    manufacturer: 'NVIDIA',
    memorySize: '5GB',
    gpuFrequency: '1100 MHz',
    busWidth: '160-bit',
    category: 'Workstation',
  },

  {
    id: 10,
    title: 'AMD Radeon Pro WX 7100',
    price: '$690',
    content: "The Radeon Pro WX 7100 graphics card is equipped with 8GB of graphics memory to handle large and complex datasets, and can drive up to four 4K displays at 60Hz. The Radeon Pro WX 7100 graphics card has the performance to tackle tomorrow's workloads in design and manufacturing and media and entertainment industries.",
    img: image10,
    manufacturer: 'AMD',
    memorySize: '8GB',
    gpuFrequency: '1200 MHz',
    busWidth: '256-bit',
    category: 'Workstation',
  },

  {
    id: 11,
    title: 'NVIDIA Tesla V100',
    price: '$9,600',
    content: "Equipped with 640 Tensor Cores, Tesla V100 delivers 125 teraFLOPS of deep learning performance. That's 12X Tensor FLOPS for DL Training, and 6X Tensor FLOPS for DL Inference when compared to NVIDIA Pascal™ GPUs. NVIDIA NVLink in Tesla V100 delivers 2X higher throughput compared to the previous generation.",
    img: image11,
    manufacturer: 'NVIDIA',
    memorySize: '32GB',
    gpuFrequency: '1300 MHz',
    busWidth: '4096-bit',
    category: 'Compute/Accelerator',
  },

  {
    id: 12,
    title: 'AMD Radeon Instinct MI100',
    price: '$6,830',
    content: 'It features 7680 shading units, 480 texture mapping units, and 64 ROPs. AMD has paired 32 GB HBM2 memory with the Radeon Instinct MI100, which are connected using a 4096-bit memory interface. The GPU is operating at a frequency of 1000 MHz, which can be boosted up to 1502 MHz, memory is running at 1200 MHz.',
    img: image12,
    manufacturer: 'AMD',
    memorySize: '32GB',
    gpuFrequency: '1000 MHz',
    busWidth: '4096-bit',
    category: 'Compute/Accelerator',
  },

  {
    id: 13,
    title: 'AMD Radeon Pro VII',
    price: '$1,000',
    content: 'It features 3840 shading units, 240 texture mapping units, and 64 ROPs. AMD has paired 16 GB HBM2 memory with the Radeon Pro VII, which are connected using a 4096-bit memory interface. The GPU is operating at a frequency of 1400 MHz, which can be boosted up to 1700 MHz, memory is running at 1000 MHz.',
    img: image14,
    manufacturer: 'AMD',
    memorySize: '16GB',
    gpuFrequency: '1000 MHz',
    busWidth: '4096-bit',
    category: 'Compute/Accelerator',
  },

  {
    id: 14,
    title: 'AMD Radeon Pro V340',
    price: '$5,000',
    content: 'Radeon Pro V340 16 GB combines two graphics processors to increase performance. It features 3584 shading units, 224 texture mapping units, and 64 ROPs, per GPU. AMD has paired 32 GB HBM2 memory with the Radeon Pro V340 16 GB, which are connected using a 2048-bit memory interface per GPU (each GPU manages 16,384 MB).',
    img: image16,
    manufacturer: 'AMD',
    memorySize: '32GB',
    gpuFrequency: '900 MHz',
    busWidth: '2048-bit',
    category: 'Virtualization/Cloud',
  },

  {
    id: 15,
    title: 'NVIDIA RTX A6000',
    price: '$6,500',
    content: 'Built on the NVIDIA Ampere architecture, the RTX A6000 combines 84 second-generation RT Cores, 336 third-generation Tensor Cores, and 10,752 CUDA cores with 48 GB of graphics memory for unprecedented rendering, AI, graphics, and compute performance.',
    img: image17,
    manufacturer: 'NVIDIA',
    memorySize: '48GB',
    gpuFrequency: '900 MHz',
    busWidth: '400-bit',
    category: 'Virtualization/Cloud',
  },

  {
    id: 16,
    title: 'AMD Radeon Instinct MI25',
    price: '$399',
    content: 'It features 4096 shading units, 256 texture mapping units, and 64 ROPs. AMD has paired 16 GB HBM2 memory with the Radeon Instinct MI25, which are connected using a 2048-bit memory interface. The GPU is operating at a frequency of 1400 MHz, which can be boosted up to 1500 MHz, memory is running at 852 MHz.',
    img: image18,
    manufacturer: 'AMD',
    memorySize: '16GB',
    gpuFrequency: '1400 MHz',
    busWidth: '2048-bit',
    category: 'Virtualization/Cloud',
  },

  {
    id: 17,
    title: 'NVIDIA Jetson Nano',
    price: '$120',
    content: 'It features 128 shading units, 16 texture mapping units, and 16 ROPs. NVIDIA has paired 4 GB LPDDR4 memory with the Jetson Nano, which are connected using a 64-bit memory interface. The GPU is operating at a frequency of 640 MHz, which can be boosted up to 921 MHz, memory is running at 1600 MHz.',
    img: image19,
    manufacturer: 'NVIDIA',
    memorySize: '4GB',
    gpuFrequency: '600 MHz',
    busWidth: '64-bit',
    category: 'Embedded/IoT',
  },

  {
    id: 18,
    title: 'AMD Ryzen Embedded V1000 series',
    price: '$300',
    content: 'Delivering discrete-GPU caliber graphics and multimedia processing, and compute performance up to 3.61 TFLOPS with thermal design power (TDP) as low as 12W and as high as 54W, AMD Ryzen Embedded V1000 SoCs equip system designers to achieve new levels of processing efficiency and design versatility.',
    img: image20,
    manufacturer: 'AMD',
    memorySize: '8GB',
    gpuFrequency: '1300 MHz',
    busWidth: '128-bit',
    category: 'Embedded/IoT',
  },

  {
    id: 19,
    title: 'Intel Iris Xe Graphics',
    price: '$600',
    content: 'It is aimed at slim and highly portable productivity laptops and has 4GB of dedicated LPDDR4X-4266 memory with a 128-bit wide memory bus, has 96 EUs, 48 texture units, 24 ROPs, a peak clock speed of 1650 MHz and a performance of 2.46 FP32 teraFLOPs with a 25w TDP.',
    img: image21,
    manufacturer: 'Intel',
    memorySize: '16GB',
    gpuFrequency: '1500 MHz',
    busWidth: '128-bit',
    category: 'Embedded/IoT',
  },

  {
    id: 20,
    title: 'Qualcomm Adreno 650',
    price: '$650',
    content: 'The Adreno 650 supports Vulkan 1.1, DirectX 12, OpenGL ES 3.2, and OpenCL 2.0 FP. Furthermore, games and videos can use HDR10+ and Dolby Vision (with a supported display). The 650 supports 2 displays with up to 4K 60 Hz / QHD+ 144 Hz.',
    img: image22,
    manufacturer: 'Qualcomm',
    memorySize: '12GB',
    gpuFrequency: '800 MHz',
    busWidth: '128-bit',
    category: 'Mobile/Smartphone',
  },

  {
    id: 21,
    title: 'Apple A14 Bionic GPU',
    price: '$900',
    content: 'The Apple A14 Bionic features an Apple-designed 64-bit, six-core CPU, implementing ARMv8 with two high-performance cores called Firestorm and four energy-efficient cores called Icestorm. The A14 integrates an Apple-designed four-core GPU with 30% faster graphics performance than the A12.',
    img: image23,
    manufacturer: 'Apple',
    memorySize: '8GB',
    gpuFrequency: '600 MHz',
    busWidth: '64-bit',
    category: 'Mobile/Smartphone',
  },

  {
    id: 22,
    title: 'ARM Mali-G78 MP14',
    price: '$700',
    content: 'The ARM Mali-G78MP14 is an integrated high-end graphics card for ARM based SoCs (mostly Android based). It was introduced late 2020 in the Samsung Exynos 2100 (e.g. Galaxy S21). It integrates 14 of the 24 possible cores and is based on the second generation of the Valhal architecture.',
    img: image24,
    manufacturer: 'ARM',
    memorySize: '8GB',
    gpuFrequency: '700 MHz',
    busWidth: '64-bit',
    category: 'Mobile/Smartphone',
  },

  {
    id: 23,
    title: 'NVIDIA Quadro RTX 4000',
    price: '$950',
    content: 'Meet the challenge of today’s demanding professional workflows with NVIDIA® Quadro RTX™ 4000, powered by NVIDIA Turing™ architecture and the NVIDIA RTX™ platform. The NVIDIA Quadro RTX 4000 delivers GPU accelerated ray tracing, deep learning, and advanced shading in an accessible single slot form factor. It gives designers the power to accelerate their creative efforts with faster time to insight and faster time to solution.',
    img: image25,
    manufacturer: 'NVIDIA',
    memorySize: '8GB',
    gpuFrequency: '1500 MHz',
    busWidth: '256-bit',
    category: 'Professionals/Content-Creation',
  },

  {
    id: 24,
    title: 'AMD Radeon Pro WX 5100',
    price: '$450',
    content: 'AMD has paired 8 GB GDDR5 memory with the Radeon Pro WX 5100, which are connected using a 256-bit memory interface. The GPU is operating at a frequency of 713 MHz, which can be boosted up to 1086 MHz, memory is running at 1250 MHz (5 Gbps effective).',
    img: image26,
    manufacturer: 'AMD',
    memorySize: '8GB',
    gpuFrequency: '1100 MHz',
    busWidth: '256-bit',
    category: 'Professionals/Content-Creation',
  },

  {
    id: 25,
    title: 'NVIDIA Quadro P5000',
    price: '$1,900',
    content: 'The GPU is operating at a frequency of 1607 MHz, which can be boosted up to 1733 MHz, memory is running at 1127 MHz (9 Gbps effective). Being a dual-slot card, the NVIDIA Quadro P5000 draws power from 1x 8-pin power connector, with power draw rated at 180 W maximum. Display outputs include: 1x DVI, 4x DisplayPort 1.4a.',
    img: image27,
    manufacturer: 'NVIDIA',
    memorySize: '16GB',
    gpuFrequency: '1700 MHz',
    busWidth: '256-bit',
    category: 'Professionals/Content-Creation',
  },

  {
    id: 26,
    title: 'AMD Radeon Pro WX 3200',
    price: '$250',
    content: 'It features 640 shading units, 32 texture mapping units, and 16 ROPs. AMD has paired 4 GB GDDR5 memory with the Radeon Pro WX 3200, which are connected using a 128-bit memory interface. The GPU is operating at a frequency of 1295 MHz, memory is running at 1500 MHz (6 Gbps effective).',
    img: image28,
    manufacturer: 'AMD',
    memorySize: '4GB',
    gpuFrequency: '1300 MHz',
    busWidth: '128-bit',
    category: 'Professionals/Content-Creation',
  },

  {
    id: 27,
    title: 'NVIDIA A100 Tensor Core GPU',
    price: '$17,900',
    content: "NVIDIA A100 delivers 312 teraFLOPS (TFLOPS) of deep learning performance. That's 20X the Tensor floating-point operations per second (FLOPS) for deep learning training and 20X the Tensor tera operations per second (TOPS) for deep learning inference compared to NVIDIA Volta GPUs.",
    img: image13,
    manufacturer: 'NVIDIA',
    memorySize: '80GB',
    gpuFrequency: '1400 MHz',
    busWidth: '512-bit',
    category: 'AI/Deep-Learning',
  },

  {
    id: 28,
    title: 'NVIDIA RTX 3090',
    price: '$1,599',
    content: "The GeForce RTX™ 3090 Ti and 3090 are powered by Ampere—NVIDIA's 2nd gen RTX architecture. They feature dedicated 2nd gen RT Cores and 3rd gen Tensor Cores, streaming multiprocessors, and a staggering 24 GB of G6X memory to deliver high-quality performance for gamers and creators.",
    img: image29,
    manufacturer: 'NVIDIA',
    memorySize: '24GB',
    gpuFrequency: '1400 MHz',
    busWidth: '384-bit',
    category: 'AI/Deep-Learning',
  },

  {
    id: 29,
    title: 'NVIDIA Tesla T4',
    price: '$1,100',
    content: 'Summary. Built on a 12nm process, the NVIDIA Tesla T4 GPU has 13.6 billion transistors, 16GB GDDR6 memory, and high bandwidth speed to allow the GPU to access information at a faster speed, making every type of workload easy to accomplish.',
    img: image15,
    manufacturer: 'NVIDIA',
    memorySize: '16GB',
    gpuFrequency: '600 MHz',
    busWidth: '256-bit',
    category: 'AI/Deep-Learning',
  },
];
