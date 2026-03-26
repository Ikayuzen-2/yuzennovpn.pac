function FindProxyForURL(url, host) {
    // 1. 우회하여 접속할 도메인 목록 (추가/수정 가능)
    var targetDomains = [
        "https://pokerogue.net/",         // 게임
        "*.nature.com",            // 과학/교육 논문
        "*.sciencedirect.com",     // 과학/교육 논문
        "*.ncbi.nlm.nih.gov",      // 의학/생명과학 논문
        "*.ieee.org"               // 공학 논문
    ];

    // 2. 현재 접속하려는 사이트가 위 목록에 있는지 확인
    for (var i = 0; i < targetDomains.length; i++) {
        if (shExpMatch(host, targetDomains[i])) {
            
            // 3. 공용 프록시 서버 주소 (순차적으로 시도)
            // 첫 번째 프록시가 죽으면 두 번째로, 둘 다 죽으면 직접 연결(DIRECT) 시도
            return "PROXY 89.208.106.138:10808; " + 
                   "PROXY 20.24.43.214:80; " + 
                   "DIRECT";
        }
    }

    // 4. 위 목록에 없는 일반 사이트(유튜브, 구글 검색 등)는 프록시를 거치지 않음
    // 이를 통해 평상시 인터넷 속도 저하를 완벽히 방지합니다.
    return "DIRECT";
}
