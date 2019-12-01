const dirs = {
  DocumentDir: 'mocked_document_dir_path',
  DownloadDir: 'mocked_download_dir_path',
};
const fs = { dirs };
const config = jest.fn();

export default { fs, config };
