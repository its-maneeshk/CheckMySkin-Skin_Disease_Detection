import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div className="max-w-3xl mx-auto px-6">
            <h1 className="text-3xl font-semibold text-gray-900 mb-4">About CheckMySkin.AI</h1>

            <p className="text-gray-700 text-base mb-6 leading-relaxed">
                <strong>CheckMySkin.AI</strong> is an AI-powered web application that provides early insights into possible skin conditions by analyzing uploaded images. It aims to assist users in recognizing potential issues quickly and conveniently using modern machine learning techniques.
            </p>

            <div className="border-l-4 border-blue-600 pl-4 mb-6">
                <p className="text-gray-800 font-medium">
                    “Helping people understand their skin through AI-driven insights.”
                </p>
            </div>

            <div className='flex gap-12'>
                <div>
                    <h2 className="text-xl font-medium text-gray-800 mb-2">How It Works</h2>
                    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                        <li>Upload a clear image of your skin concern.</li>
                        <li>The AI model processes and analyzes the image.</li>
                        <li>You get a prediction with confidence percentage.</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-medium text-gray-800 mb-2">Tech Stack</h2>
                    <ul className="list-none text-gray-700 mb-6">
                        <li><span className="font-medium">Frontend:</span> React + Tailwind CSS</li>
                        <li><span className="font-medium">Backend:</span> Flask or FastAPI</li>
                        <li><span className="font-medium">ML:</span> TensorFlow / PyTorch</li>
                    </ul>
                </div>
            </div>


            <h2 className="text-xl font-medium text-gray-800 mb-2">Disclaimer</h2>
            <p className="text-sm text-gray-600 italic mb-6">
                This tool is for informational purposes only and does not substitute professional medical advice or diagnosis. Always consult a qualified dermatologist.
            </p>

            <div className="flex items-center justify-between border-t pt-8 text-sm text-gray-600">
                <p>© {new Date().getFullYear()} CheckMySkin.AI</p>
                <Link to="/" className="text-blue-600 hover:underline">← Back to Home</Link>
            </div>
        </div>
    );
}
