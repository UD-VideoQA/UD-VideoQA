"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function UDVideoQAPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const carouselImages = [
    { src: "/media/UDVideoQA/Method.png", alt: "UD-VideoQA Method" },
    { src: "/media/UDVideoQA/Stats.png", alt: "Dataset Statistics" },
    { src: "/media/UDVideoQA/Intersection.png", alt: "Intersection Analysis" },
    { src: "/media/UDVideoQA/Tool.png", alt: "Annotation Tool" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [carouselImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href="https://UD-VideoQA.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              Home
            </a>
            <div className="relative group">
              <button className="hover:text-primary">More Research</button>
              <div className="absolute hidden group-hover:block bg-card border rounded-md shadow-lg mt-2 py-2 min-w-[300px] z-10">
                <a
                  href="https://arxiv.org/abs/2412.01132"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-accent text-sm"
                >
                  Eyes on the Road: State-of-the-Art VideoQA Models Assessment
                </a>
                <a
                  href="https://eventbasedvision.github.io/SEVD/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-accent text-sm"
                >
                  SEVD - CVPRW 2024
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-balance">
            UD-VideoQA: A Benchmark Dataset for Video Question Answering in Traffic Intersection Monitoring
          </h1>

          <p className="text-sm text-muted-foreground">Paper is Archived</p>

          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <a href="https://github.com/joe-rabbit" className="hover:text-primary">
              Joseph Raj Vishal
            </a>
            <span>Siri</span>
            <a href="https://github.com/KathaNaik/" className="hover:text-primary">
              Katha Naik
            </a>
            <a href="https://github.com/patilraje" className="hover:text-primary">
              Rutuja Patil
            </a>
            <span>Krishna Vinod</span>
            <span>Kashap</span>
            <span>Pritvi Jai</span>
            <a href="https://github.com/UMD-Cognitive-Robot" className="hover:text-primary">
              Yezhou Yang
            </a>
            <a href="https://chakravarthi589.github.io/" className="hover:text-primary">
              Bharatesh Chakravarthi
            </a>
          </div>

          <p className="text-xl font-semibold">Arizona State University</p>

          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild variant="default">
              <a href="https://github.com/joe-rabbit/UDVideoQA_videoqa" target="_blank" rel="noopener noreferrer">
                Code
              </a>
            </Button>
            <Button asChild variant="default">
              <a
                href="https://huggingface.co/datasets/joeWabbit/UD_VideoQA_Reasoning_Rich_Video_QA_for_Urban_Traffic"
                target="_blank"
                rel="noopener noreferrer"
              >
                Data
              </a>
            </Button>
            <Button asChild variant="default">
              <a href="/docs/InterAct_VideoQADatasetDescription.pdf" target="_blank" rel="noopener noreferrer">
                Dataset Description
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Teaser Section */}
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="space-y-6">
          <img src="/media/UDVideoQA/teaser.png" alt="UD-VideoQA Teaser" className="w-full rounded-lg shadow-lg" />
          <p className="text-center text-muted-foreground leading-relaxed">
            <strong>UD-VideoQA</strong> is a curated, publicly available traffic monitoring dataset gathered using ARGOS
            Cameras and mobile devices under diverse weather and lighting conditions. It comprises 8 hours of real-world
            footage from multiple intersections, segmented into 10-second clips, and features over 25,000
            question-answer pairs covering spatiotemporal dynamics, vehicle interactions, and incident detection. This
            dataset enables the benchmarking and enhancement of VideoQA models for intelligent transportation systems.
            It includes five QA types: (1) attribution, (2) counting, (3) event reasoning, (4) reverse reasoning, and
            (5) counterfactual inference.
          </p>
        </div>
      </section>

      {/* Dataset Statistics Carousel */}
      <section className="container mx-auto px-4 py-12 max-w-5xl" id="Statistics">
        <h2 className="text-3xl font-bold mb-8">Dataset Statistics</h2>
        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <div className="relative aspect-video bg-muted">
              <img
                src={carouselImages[currentSlide].src || "/placeholder.svg"}
                alt={carouselImages[currentSlide].alt}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-transparent"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <div className="flex justify-center gap-2 mt-4">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Abstract */}
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <Card className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Abstract</h2>
          <p className="text-muted-foreground leading-relaxed text-justify">
            Traffic monitoring is crucial for urban mobility, road safety, and intelligent transportation systems (ITS).
            Deep learning has advanced video-based traffic monitoring through video question answering (VideoQA) models,
            enabling structured insight extraction from traffic videos. However, existing VideoQA models struggle with
            the complexity of real-world traffic scenes, where multiple concurrent events unfold across spatiotemporal
            dimensions. To address these challenges, this paper introduces UD-VideoQA, a curated dataset designed to
            benchmark and enhance VideoQA models for traffic monitoring tasks. The UD-VideoQA dataset comprises 8 hours
            of real-world traffic footage collected from diverse intersections, segmented into 10-second video clips,
            with over 25,000 question-answer (QA) pairs covering spatiotemporal dynamics, vehicle interactions, incident
            detection, and other critical traffic attributes. State-of-the-art VideoQA models are evaluated on
            UD-VideoQA, exposing challenges in reasoning over fine-grained spatiotemporal dependencies within complex
            traffic scenarios. Additionally, fine-tuning these models on UD-VideoQA yields notable performance
            improvements, demonstrating the necessity of domain-specific datasets for VideoQA. UD-VideoQA is publicly
            available as a benchmark dataset to facilitate future research in real-world-deployable VideoQA models for
            intelligent transportation systems.
          </p>
        </Card>
      </section>

      {/* Data Collection */}
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center">UD-VideoQA - Data Collection Setup and Diversity</h2>
          <img
            src="/media/UDVideoQA/InterAct_Collection.png"
            alt="Data Collection Framework"
            className="w-full rounded-lg shadow-lg"
          />
          <p className="text-muted-foreground leading-relaxed text-justify">
            Overview of the UD-VideoQA data collection framework, integrating traffic video recording and processing
            with a hybrid approach combining manual labeling and GPT-based automation. The pipeline segments eight hours
            of footage into 10-second clips, extracts key metadata (e.g., vehicle attributes, movement patterns,
            pedestrian data), and generates structured question-answer pairs covering attribution, counting, reverse
            reasoning, event reasoning, and counterfactual inference.
          </p>
        </div>
      </section>

      {/* Video Question Generation */}
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center">UD-VideoQA - Video Question Generation LeaderBoard</h2>
          <img
            src="/media/UDVideoQA/Video_Qgen.png"
            alt="Video Question Generation"
            className="w-full rounded-lg shadow-lg"
          />
          <p className="text-muted-foreground leading-relaxed text-justify">
            Overview of the UD-VideoQA dataset, which comprises 28,800 question-answer pairs across various reasoning
            categories. A higher concentration appears in counting, attribute recognition, and event reasoning, followed
            by counterfactual inference and reverse reasoning (3a). Figures 3(b)-(d) illustrate the dataset's emphasis
            on vehicular-related questions, the dominance of attribution and event reasoning categories, and the
            distribution of question types ("what," "where," and "how"). This structured approach supports the analysis
            of complex, multi-event traffic scenarios, requiring robust spatio-temporal reasoning. A rigorous human and
            GPT-assisted validation process ensures the consistency, accuracy, and reliability of all annotations.
          </p>
        </div>
      </section>

      {/* Experimentation Statistics */}
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center">InterAct - Experimentation Statistics</h2>
          <img
            src="/media/UDVideoQA/InterAct_Model_Stats.png"
            alt="Experimentation Statistics"
            className="w-full rounded-lg shadow-lg"
          />
          <p className="text-muted-foreground leading-relaxed text-justify">
            Performance analysis of VideoLlama2, Llava-NeXT-Video, and Qwen2-VL-7B-hf on the InterAct VideoQA dataset,
            highlighting metric distributions (a), before vs. after fine-tuning (b), and multi-metric improvements (c).
            Notably, <strong>Qwen2-VL-7B-hf</strong> demonstrates the most substantial gains across complex reasoning
            tasks, emphasizing the effectiveness of fine-tuning for robust traffic video analysis.
          </p>
        </div>
      </section>

      {/* Sample Videos */}
      <section className="container mx-auto px-4 py-12 max-w-6xl">
        <h3 className="text-3xl font-bold text-center mb-8">Sample Data Recordings</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/zctaHOSsrXE?si=bF_imjL0QqvdZc1L"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; web-share"
              allowFullScreen
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/cpvGMZYcH24?si=o7q2rowf6SvWgBm-"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; web-share"
              allowFullScreen
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/SSjnZOGdXfM?si=amTy_vwWz5WImBWt"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; web-share"
              allowFullScreen
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* BibTeX */}
      <section className="container mx-auto px-4 py-12 max-w-4xl" id="BibTeX">
        <Card className="p-8">
          <h2 className="text-3xl font-bold text-center mb-6">BibTeX</h2>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
            {`@misc{vishal2025interactvideoreasoningrichvideoqa,
  title={UD-Video: Reasoning-Rich Video QA for Urban Traffic}, 
  author={Joseph Raj Vishal and Divesh Basina and Rutuja Patil and Manas Srinivas Gowda and Katha Naik and Yezhou Yang and Bharatesh Chakravarthi},
  year={2025},
  eprint={2507.14743},
  archivePrefix={arXiv},
  primaryClass={cs.CV},
  url={https://arxiv.org/abs/2507.14743}, 
}`}
          </pre>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground space-y-2">
            <p>
              This website is licensed under a{" "}
              <a
                href="http://creativecommons.org/licenses/by-sa/4.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                Creative Commons Attribution-ShareAlike 4.0 International License
              </a>
              .
            </p>
            <p>
              This webpage template is from{" "}
              <a
                href="https://github.com/nerfies/nerfies.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                Nerfies
              </a>
              . We sincerely thank{" "}
              <a href="https://keunhong.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                Keunhong Park
              </a>{" "}
              for developing and open-sourcing this template.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
