import React from 'react';

const FaSection = () => {
    return (
        <div>
<section className=" bg-gray-100  text-gray-800">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
		<p className="mt-4 mb-8  text-gray-600">Sagittis tempor donec id vestibulum viverra. Neque condimentum primis orci at lacus amet bibendum.</p>
		<div className="space-y-4">
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible: ring-violet-600">what is a donation?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4  text-gray-600">Lectus iaculis orci metus vitae ligula dictum per. Nisl per nullam taciti at adipiscing est. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible: ring-violet-600">Is my donations actually being put to use?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4  text-gray-600">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible: ring-violet-600">My Donation are going to chariya?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4  text-gray-600">Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed. </p>
			</details>
		</div>
	</div>
</section>
        </div>
    );
};

export default FaSection;