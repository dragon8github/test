module.exports = {
  'Find the answer.': function (client) {
    // ���� Bing ҳ���еĽڵ�.
    const searchInput = '#sb_form_q'
    const searchBtn = '#sb_form_go'
    const question = 'what is microsoft'

    // ������������� bing.com.
    client.url('http://bing.com').maximizeWindow()

    // ȷ�� "body" ����������ʹ��.
    client.expect.element('body').to.be.present
    client.expect.element(searchInput).to.be.visible
    client.pause(2000)  // �Ե�����.

    // ���� "what is microsoft" Ȼ������.
    client.setValue(searchInput, question)
    client.click(searchBtn)
    client.pause(2000)

    // ��һ��ͼȻ�󱣴浽 "reports/answer.png". 
    client.expect.element('body').to.be.present
    client.saveScreenshot('reports/answers.png')
    client.end()
  }
}