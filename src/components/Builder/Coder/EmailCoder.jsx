import React from 'react';
import ExportHtml from './ExportHTML.jsx';
import GetAllContent from './Content/getAllContent.jsx';

export default function EmailCoder() {

	return (
		<>
			<GetAllContent />
			<ExportHtml />
		</>
	);
}
